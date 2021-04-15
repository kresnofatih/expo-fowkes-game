import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Colors'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font';

const Header = ({left, right}) => {
    let [fontsLoaded] = useFonts({
        'poppins-Light' : require('../assets/fonts/Poppins-Light.ttf'),
        'poppins-Medium' : require('../assets/fonts/Poppins-Medium.ttf'),
        'poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-Bold' : require('../assets/fonts/Poppins-Bold.ttf'),
    });
    return (
        <View style={styles.headercontainer}>
            {fontsLoaded &&
            <>
                <TouchableOpacity>
                    <Text style={[styles.headerbuttontext, {fontFamily: 'poppins-Bold', textAlign: 'left', marginLeft: 25}]}>{left}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.headerbuttontext, {fontFamily: 'poppins-Bold', textAlign: 'right', marginRight: 25}]}>{right}</Text>
                </TouchableOpacity>
            </>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headercontainer:{
        backgroundColor: colors.lcyan,
        width: Dimensions.get('window').width,
        paddingVertical: 20,
        paddingTop: Constants.statusBarHeight+10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    headerbuttontext:{
        color: colors.dwhite,
        fontSize: 25,
    }
})
