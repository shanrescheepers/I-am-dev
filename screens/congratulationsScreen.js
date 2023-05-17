import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { globalStylesheet, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';


// fonts import for systems


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const CongratsScreen = ({ route, navigation }) => {
    const { username } = route.params;


    return (


        <View style={styles.container}>


            <View style={styles.logoview}>
                <Image source={require("../assets/congrats.png")} style={styles.logo}></Image>
            </View>
            <View style={styles.congratsview} >
                <Text style={{ fontWeight: 900 }}>CONGRATS, {username}  </Text>
                <Text style={{ fontWeight: 900 }}>You are a developer!</Text>
                <Text style={{ textAlign: 'center', marginTop: 10 }}>Enjoy the sleepless nights and thousands lines of code..</Text>
            </View>




            <View style={styles.butonContainer}>



                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={0.2} style={styles.npmButton} onPress={() => navigation.replace('WelcomeScreen')}>
                        <View >
                            <Text style={styles.signInButtonText}>undo</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View >


        </View>

    )
}


export default CongratsScreen



const styles = StyleSheet.create({

    container: {
        margin: 20,
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },

    doyou: {
        textAlign: 'center',
        alignSelf: 'center',
        width: RFPercentage(60),
        alignItems: 'center',
    },
    logoview: {
        marginTop: RFPercentage(20),
    },
    background: {

        resizeMode: 'contain', // or 'contain' to maintain aspect ratio
        width: windowWidth,
        height: windowHeight,
    },
    heading: {
        marginTop: RFPercentage(3),

        fontSize: RFPercentage(3),
        fontWeight: 900,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    npmButton: {
        width: RFPercentage(45),
        borderRadius: 15,
        shadowColor: 'gray',
        shadowRadius: RFPercentage(8),
        marginTop: 60,
        backgroundColor: '#7F72F0',
    },
    logo: {
        height: RFPercentage(15),
        width: RFPercentage(15),
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
        resizeMode: 'cover',
    },
    Intro: {
        textAlign: 'center',
        color: 'black',
    },
    Intro2: {
        textAlign: 'center',
        color: 'black',
    },
    horisontalLine: {
        width: 90,
        height: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    exploreCaptureShare: {
        marginTop: 10,
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
    },
    butonContainer: {
        marginTop: 80,

    },
    buttonView: {
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: RFPercentage(20),
    },
    signInButton: {
        borderRadius: 50,
        shadowColor: 'gray',
        shadowRadius: RFPercentage(8),
        backgroundColor: '#A27A51',
        position: 'relative',
        height: RFPercentage(8),
        width: RFPercentage(16),
    },
    signInButtonText: {
        textAlign: 'center',

        padding: RFPercentage(2),
        fontSize: RFPercentage(3),
    },
    signUpButton: {
        borderRadius: 50,
        shadowColor: 'gray',
        shadowRadius: RFPercentage(8),
        height: RFPercentage(8),
        width: RFPercentage(50),
        borderWidth: 1,
        borderColor: '#F2C440',
        borderStyle: 'dashed',
        position: 'relative',

    },
    signUpButtonText: {
        textAlign: 'center',

        padding: RFPercentage(1.9),
        fontSize: RFPercentage(3),
    },
    congratsview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    congratsviewInput: {
        fontSize: 16,
        width: RFPercentage(50),
        color: 'black',
        fontWeight: 800,

        alignItems: 'center',

    },
    inputStyle: {
        width: RFPercentage(40),
        height: 40,
        borderRadius: 5,

        borderColor: '#71563A',
        borderWidth: 1,
        padding: 10,
        color: '#A27A51',
        textDecorationLine: 'none',

    },
})
