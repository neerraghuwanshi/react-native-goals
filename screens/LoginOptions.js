import React from 'react'
import { View, StyleSheet } from 'react-native'

import Button from '../components/Button';
import { windowWidth } from '../constants/screenSize';
import { containerStyles } from '../constants/styles/containerStyles'


export default Tasks = () => {
    return (
        <View
            style={{
                ...containerStyles.centre,
                ...containerStyles.fullScreen,
            }}>
            <Button
                mainContainerStyle={styles.mainContainerStyle}
                buttonStyle={{
                    ...styles.buttonStyle,
                    ...styles.loginButton,
                }}
                titleStyle={styles.titleStyle}
                title='Login'
                onPress={()=>console.log('Login')}/>
            <Button
                mainContainerStyle={styles.mainContainerStyle}
                buttonStyle={{
                    ...styles.buttonStyle,
                    ...styles.signUpButton,
                }}
                titleStyle={styles.titleStyle}
                title='Sign Up'
                onPress={()=>console.log('Sign Up')}/>
            <Button
                buttonStyle={{
                    ...styles.buttonStyle,
                    ...styles.skipButton,
                }}
                titleStyle={styles.titleStyle}
                title='Skip'
                onPress={()=>console.log('Skip')}/>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainerStyle: {
        marginBottom: 80,
    },
    buttonStyle: {
        width: windowWidth * .7,
        height: windowWidth * .2,
        borderRadius: windowWidth,
    },
    loginButton: {
        backgroundColor: 'green',
    },
    signUpButton: {
        backgroundColor: 'blue',
    },
    skipButton: {
        backgroundColor: '#d6a30b',
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: '500',
    },
})