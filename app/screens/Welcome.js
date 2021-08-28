import React from 'react'
import {AppButton, ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Welcome() {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer} >
                <Image source={require("../assets/logo.png")} style={styles.logo} />
                <Text style={styles.tagline}>
                    Your All Purpose Will App
                </Text>
            </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    logoContainer: {
        flex: 3,
        position: 'absolute',
        top: 150,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color:'#0688eb'
    },
    button: {
        backgroundColor: '#0688eb',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '90%',
        margin: 10
    },
    text: {
        color: 'white',
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: 'bold'
    }
})
