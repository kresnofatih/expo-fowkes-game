import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import Header from '../items/Header';
import Constants from 'expo-constants'
import Footer from '../items/Footer';
import { StatusBar } from 'expo-status-bar';

const Play = ({changePage}) => {
    let [fontsLoaded] = useFonts({
        'poppins-Light' : require('../assets/fonts/Poppins-Light.ttf'),
        'poppins-Medium' : require('../assets/fonts/Poppins-Medium.ttf'),
        'poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-Bold' : require('../assets/fonts/Poppins-Bold.ttf'),
    });
    const [changeNumerator, setChangeNumerator] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentMiss, setCurrentMiss] = useState(0);
    const [randomNumber1, setRandomNumber1] = useState();
    const [randomNumber2, setRandomNumber2] = useState(Math.floor(Math.random()*100));
    const [counter, setCounter] = useState(900);
    const [attempt, setAttempt] = useState(0);
    const id = useRef(null);
    const clearTImer = ()=>{
        window.clearInterval(id.current)
    }

    const restartGame = ()=>{
        setCurrentScore(0);
        setCurrentMiss(0);
        setCounter(10);
        setAttempt(t=>t+1);
    }

    const answerProblem = (answer)=>{
        if((randomNumber1+randomNumber2)%2!=0){
            if(answer===false){
                setCurrentScore(currentScore+1);
            } else {
                setCurrentMiss(currentMiss+1);
            }
        } else {
            if(answer===true){
                setCurrentScore(currentScore+1);
            } else {
                setCurrentMiss(currentMiss+1);
            }
        }

        setChangeNumerator(changeNumerator+1);
    }
    useEffect(()=>{
        setRandomNumber1(Math.floor(Math.random()*100));
        setRandomNumber2(Math.floor(Math.random()*100));
    },[changeNumerator]);

    useEffect(()=>{
        id.current= window.setInterval(()=>{
            if(counter>0){
                setCounter(time=>time-1);
            }
        }, 1000);

        return ()=>clearTImer();
    },[attempt]);

    useEffect(()=>{
        if(counter===0){
            clearTImer();
        }
    }, [counter])
    return (
        <View style={styles.playcontainer}>
            <StatusBar style="light"/>
            <Header
                left={counter!=0 ? ('0'+Math.floor(counter/60)).slice(-2)+':'+('0'+(counter-Math.floor(counter/60)*60)).slice(-2) : 'Again'}
                leftAction={restartGame}
                right={'Quit'}
                rightAction={()=>{
                    changePage('home');
                }}
            />
            {counter!=0 && fontsLoaded &&
                <Text style={[styles.problemtext, {fontFamily: 'poppins-Bold'}]}>{randomNumber1+' + '+randomNumber2}</Text>
            }
            <View style={[styles.playImageContainer, counter!=0 && {display: 'none'}]}>
                <Image
                    style={styles.playImage}
                    source={require('../assets/business-3d-122.png')}
                    resizeMode="contain"
                />
            </View>
            {fontsLoaded && counter===0 &&
            <>
                <Text style={[styles.problemtext, {fontFamily: 'poppins-Bold', fontSize: 50, marginTop: 10}]}>Awesome!</Text>
                <Text style={[styles.problemtext, {fontFamily: 'poppins-Medium', fontSize: 20, marginTop: 0}]}>{'You Scored '+currentScore+' and Missed '+currentMiss+'!'}</Text>
                {/* <Text style={[styles.problemtext, {fontFamily: 'poppins-Medium', fontSize: 20, marginTop: 0}]}>{'and Missed '+currentMiss+'!'}</Text> */}
            </>
            }
            {counter!=0 ?
                (<Footer left={'Odd'} right={'Even'} leftAction={()=>answerProblem(false)} rightAction={()=>answerProblem(true)}/>)
                :
                // (<Footer left={'Quit'} right={'Again'} leftAction={()=>changePage('home')} rightAction={restartGame}/>)
                <></>
            }
        </View>
    )
}

export default Play

const styles = StyleSheet.create({
    playcontainer: {
        height: Dimensions.get('window').height+Constants.statusBarHeight,
        backgroundColor: colors.dgray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: Dimensions.get('window').width,
    },
    problemtext: {
        color: colors.dwhite,
        fontSize: 60,
        marginTop: 40
    },
    playImage:{
        width: Dimensions.get('screen').width-30,
        height: Dimensions.get('screen').width-30,
        borderWidth: 10,
    },
    playImageContainer: {
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 200,
        overflow: 'hidden',
        width: Dimensions.get('screen').width-100,
        height: Dimensions.get('screen').width-100,
        backgroundColor: colors.lcyan,
        borderWidth: 10,
        borderColor: colors.dwhite
    }
})
