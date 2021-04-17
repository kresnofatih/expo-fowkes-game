import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import Constants from 'expo-constants'

const Home = ({changePage}) => {
    let [fontsLoaded] = useFonts({
        'poppins-Light' : require('../assets/fonts/Poppins-Light.ttf'),
        'poppins-Medium' : require('../assets/fonts/Poppins-Medium.ttf'),
        'poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-Bold' : require('../assets/fonts/Poppins-Bold.ttf'),
    });
    return (
        <View style={styles.homecontainer}>
            <Image
                style={styles.homeLogo}
                source={require('../assets/icon.png')}
                resizeMode="contain"
            />
            {fontsLoaded &&
            <>
                <Text style={[styles.hometitle, fontsLoaded && {fontFamily: 'poppins-Bold'}]}>
                    fowkes
                </Text>
                <Text style={[styles.homesubtitle, fontsLoaded && {fontFamily: 'poppins-Light'}]}>
                    {'increase your\ndaily focus.'}
                </Text>
                <View style={{height: 150}}></View>
                <TouchableOpacity style={styles.homebutton} onPress={()=>changePage('play')}>
                    <Text style={[styles.homebuttontext, fontsLoaded && {fontFamily: 'poppins-Bold'}]}>
                        play
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.homebutton}>
                    <Text style={[styles.homebuttontext, fontsLoaded && {fontFamily: 'poppins-Bold'}]}>
                        about
                    </Text>
                </TouchableOpacity>
            </>
            }
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    hometitle: {
        color: colors.lcyan,
        fontSize: 35,        // marginBottom: 10,
        textAlign: 'center',
        marginTop: 15
    },
    homesubtitle: {
        color: colors.dwhite,
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    homecontainer: {
        height: Dimensions.get('window').height+Constants.statusBarHeight,
        backgroundColor: colors.dgray,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    homeLogo: {
        width: Dimensions.get('screen').width,
        height: 100,
        borderRadius: 200
    },
    homebutton:{
        backgroundColor: colors.lcyan,
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginVertical: 15,
        width: 200
    },
    homebuttontext:{
        color: colors.dwhite,
        fontSize: 25,        // marginBottom: 10,
        textAlign: 'center',
    }
})
