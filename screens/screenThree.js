import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { globalStylesheet, TextInput, TouchableOpacity, Button, Image, Alert } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Switch } from 'react-native';
import { Dimensions } from 'react-native';

import DropDownPicker from "react-native-dropdown-picker";
// import Header from "./components/Header";
import { useForm, Controller } from 'react-hook-form';

// fonts import for systems


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Screen3 = ({ route, navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [genderOpen, setGenderOpen] = useState(false);
    const [genderValue, setGenderValue] = useState(null);
    const [gender, setGender] = useState([
        { label: "Developer", value: "Developer" },
        { label: "Feature", value: "Feature" },
        { label: "Bug", value: "Bug" },
    ]);

    const { username } = route.params;
    // const onCompanyOpen = useCallback(() => {
    //     setGenderOpen(false);
    // }, []);
    const onGenderOpen = useCallback(() => {
        setCompanyOpen(false);
    }, []);
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        console.log(data, "data");
    };

    function navigationName() {
        console.log(genderValue)
        if (genderValue == 'Developer' || genderValue == 'Bug') {
            Alert.alert('EEPS, wrong answer!')
        } else {
            navigation.replace('CongratulationsScreen', {
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
                    <Text style={styles.inputLabel}>Fill in the missing word: "It's not a bug, it's a ..."</Text>

                </View>

                <View style={styles.Gender}>
                    <Text >Your Answer</Text>
                    <Controller
                        name=""
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.dropdownGender}>
                                <DropDownPicker
                                    style={styles.dropdown}
                                    open={genderOpen}
                                    value={genderValue} //genderValue
                                    items={gender}
                                    setOpen={setGenderOpen}
                                    setValue={setGenderValue}
                                    setItems={setGender}
                                    placeholder="Select Your Answer"
                                    placeholderStyle={styles.placeholderStyles}
                                    onOpen={onGenderOpen}
                                    onChangeValue={onChange}
                                    zIndex={3000}
                                    zIndexInverse={1000}
                                />
                            </View>
                        )}
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


export default Screen3;




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
    dropdown: {
        border: 0,
        height: 50,
    },
    Gender: {
        marginTop: 20,
        alignSelf: 'center',
        marginHorizontal: 10,
        width: "50%",
        marginBottom: 15,
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
        marginTop: 40,
    },
    logo: {
        height: RFPercentage(15),
        width: RFPercentage(15),
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: RFPercentage(5),
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
        marginTop: RFPercentage(40),
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
        width: RFPercentage(33),
        fontWeight: 600,
        textAlign: 'center',
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
