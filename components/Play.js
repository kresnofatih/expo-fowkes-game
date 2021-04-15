import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import Header from '../items/Header';
import Constants from 'expo-constants'
import Footer from '../items/Footer';

const Play = () => {
    let [fontsLoaded] = useFonts({
        'poppins-Light' : require('../assets/fonts/Poppins-Light.ttf'),
        'poppins-Medium' : require('../assets/fonts/Poppins-Medium.ttf'),
        'poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-Bold' : require('../assets/fonts/Poppins-Bold.ttf'),
    });
    const [changeNumerator, setChangeNumerator] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [randomNumber1, setRandomNumber1] = useState();
    const [randomNumber2, setRandomNumber2] = useState(Math.floor(Math.random()*100));

    const answerProblem = (answer)=>{
        if((randomNumber1+randomNumber2)%2!=0){
            if(answer===false){
                console.log('correct');
                setCurrentScore(currentScore+1);
            }
        } else {
            if(answer===true){
                console.log('correct');
                setCurrentScore(currentScore+1);
            }
        }

        setChangeNumerator(changeNumerator+1);
    }
    useEffect(()=>{
        setRandomNumber1(Math.floor(Math.random()*100));
        setRandomNumber2(Math.floor(Math.random()*100));
    },[changeNumerator])
    return (
        <View style={styles.playcontainer}>
            <Header left={'06.57'} right={'quit'}/>
            {fontsLoaded &&
                <Text style={[styles.problemtext, {fontFamily: 'poppins-Bold'}]}>{randomNumber1+' + '+randomNumber2}</Text>
            }
            <Footer left={'Odd'} right={'Even'} leftAction={()=>answerProblem(false)} rightAction={()=>answerProblem(true)}/>
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
    }
})
