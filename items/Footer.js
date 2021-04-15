import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Colors';
import { useFonts } from 'expo-font';

const Footer = ({left, right, leftAction, rightAction}) => {
    let [fontsLoaded] = useFonts({
        'poppins-Light' : require('../assets/fonts/Poppins-Light.ttf'),
        'poppins-Medium' : require('../assets/fonts/Poppins-Medium.ttf'),
        'poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-Bold' : require('../assets/fonts/Poppins-Bold.ttf'),
    });
    return (
        <View style={styles.footercontainer}>
            {fontsLoaded &&
            <>
                <TouchableOpacity style={styles.footerbutton} onPress={leftAction}>
                    <Text style={[styles.footerbuttontext, {fontFamily: 'poppins-Bold', textAlign: 'left', marginLeft: 25}]}>{left}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerbutton} onPress={rightAction}>
                    <Text style={[styles.footerbuttontext, {fontFamily: 'poppins-Bold', textAlign: 'right', marginRight: 25}]}>{right}</Text>
                </TouchableOpacity>
            </>
            }
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footercontainer: {
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden'
    },
    footerbuttontext:{
        color: colors.dwhite,
        fontSize: 25,
    },
    footerbutton: {
        flex: 0.5,
        height: 80,
        backgroundColor: colors.lcyan,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
