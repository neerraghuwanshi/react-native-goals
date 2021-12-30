import React, { useState } from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import Colors from '../constants/Colors'
import DrawerNavigator from './DrawerNavigator'
import InitialLoader from '../screens/InitialLoader'
import LoginOptions from '../screens/LoginOptions'


export default function AppNavigator() {

    const [condition, setCondition] = useState(true)

    const myTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: Colors.primary
        },
    }

    return (
        <NavigationContainer theme={myTheme}>
            <StatusBar {...styles.statusBar}/>
            <View style={styles.container}>
                {!condition ?
                <InitialLoader /> :
                <DrawerNavigator />}
                {/* <LoginOptions /> */}
            </View>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: Colors.primary,
    },
    container: {
        flex:1,
        backgroundColor: Colors.primary,
    },
})