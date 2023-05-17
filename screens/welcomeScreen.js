import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { globalStylesheet, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import { Dimensions } from 'react-native';


// fonts import for systems


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Welcomescreen = ({ navigation }) => {

    const [user, setUser] = useState('');
    const handleChange = (newTxt) => {
        setUser(newTxt);
    }

    function navigationName() {
        if (user == '') {
            Alert.alert('Enter a name!')
        } else {
            navigation.navigate('Line1', {
                username: user
            })
        }
    }
    return (


        <View style={styles.container}>


            <View style={{ marginTop: 50 }}>
                <Text style={styles.Intro}>
                    Welcome!
                </Text>
                <Text style={styles.Intro2}>
                    Take the quiz to see if you are a developer!
                </Text>


            </View>




            <View style={styles.butonContainer}>

                {/* <TouchableOpacity activeOpacity={0.2} style={styles.signUpButton}>
                    <View >
                        <Text style={styles.signUpButtonText}>Sign  Up</Text>
                    </View>
                </TouchableOpacity > */}

                <View style={{ height: RFPercentage(3) }}>
                    <Text style={styles.inputLabel}>Your Name</Text>
                    <TextInput
                        style={styles.inputStyle}
                        keyboardType='default'
                        placeholder='John Doe'
                        placeholderTextColor='#554433'
                        defaultValue={user}
                        onChangeText={handleChange}
                    >
                    </TextInput>
                </View>

                <View style={styles.buttonView} >
                    <TouchableOpacity activeOpacity={0.2} style={styles.npmButton} onPress={() => navigationName()}>
                        <View >
                            <Text style={styles.signInButtonText}>npm start</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View >


        </View >

    )
}


export default Welcomescreen



const styles = StyleSheet.create({

    container: {
        margin: 20,
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',

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
        backgroundColor: '#7F72F0',
    },
    logo: {
        height: RFPercentage(15),
        width: RFPercentage(24),
        alignSelf: 'center',
        marginBottom: 20,

        resizeMode: 'cover',
    },
    Intro: {
        marginTop: 10,
        textAlign: 'center',
        color: 'black',
        fontWeight: 700,
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
        marginTop: RFPercentage(60),
    },
    signInButton: {
        borderRadius: 50,
        shadowColor: 'gray',
        shadowRadius: RFPercentage(8),
        backgroundColor: '#7F72F0',
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
        borderColor: '#7F72F0',
        borderStyle: 'dashed',
        position: 'relative',

    },
    signUpButtonText: {
        textAlign: 'center',

        padding: RFPercentage(1.9),
        fontSize: RFPercentage(3),
    },
    inputLabel: {
        fontSize: 14,
        marginLeft: 4,
        color: 'black',

        fontWeight: 600,

    },
    inputStyle: {
        width: RFPercentage(40),
        height: 40,
        borderRadius: 5,

        borderColor: '#533D7B',
        borderWidth: 1,
        padding: 10,
        color: '#A27A51',
        textDecorationLine: 'none',

    },
})
