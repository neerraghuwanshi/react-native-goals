import React from 'react'
import { View, StyleSheet } from 'react-native'

import { windowWidth } from '../constants/screenSize'
import Colors from '../constants/Colors'


export default MenuButton = () => {
    return (
        <View style={styles.container}>
            <View 
                style={{
                    ...styles.bar,
                    ...styles.firstBar, 
                }}>
            </View>
            <View 
                style={{
                    ...styles.bar,
                    ...styles.secondBar,
                }}>

            </View>
            <View
                style={{
                    ...styles.bar,
                    ...styles.thirdBar, 
                }}>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: windowWidth/14,
        height: windowWidth/18,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    bar: {
        height: 2,
        borderRadius: 1,
        backgroundColor: Colors.secondary,
    },
    firstBar: {
        width: '50%',
    },
    secondBar: {
        width: '100%',
    },
    thirdBar: {
        width: '50%',
        marginRight: '50%'
    },
})