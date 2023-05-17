import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { globalStylesheet, TextInput, TouchableOpacity, Button, Image, Alert } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Switch } from 'react-native';
import { Dimensions } from 'react-native';


// fonts import for systems


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Screen1 = ({ route, navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { username } = route.params;

    function navigationName() {
        if (!isEnabled) {
            Alert.alert('Toggle the switch!')
        } else {
            navigation.navigate('Line2', {
                username: username
            })
        }
    }

    return (


        <View style={styles.container}>


            <View style={{ marginTop: 20 }}>

            </View>

            <View style={{ marginTop: 20 }}>

            </View>



            <View style={styles.butonContainer}>

                {/* <TouchableOpacity activeOpacity={0.2} style={styles.signUpButton}>
                    <View >
                        <Text style={styles.signUpButtonText}>Sign  Up</Text>
                    </View>
                </TouchableOpacity > */}

                <View style={styles.doyou} >
                    <Text style={styles.inputLabel}>Do you consider yourself a developer?</Text>

                </View>

                <View style={styles.switch}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={0.2} style={styles.npmButton} onPress={() => navigationName()}>
                        <View >
                            <Text style={styles.signInButtonText}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View >


        </View>

    )
}


export default Screen1



const styles = StyleSheet.create({
    switch: {
        marginTop: 10,
        height: RFPercentage(9),

        justifyContent: 'center',
        alignItems: 'center',
    },
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
        marginTop: RFPercentage(45),
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
    inputLabel: {
        fontSize: 16,
        marginLeft: 4,
        color: 'black',

        fontWeight: 600,

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
