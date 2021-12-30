import React from 'react'
import { Text, StyleSheet } from 'react-native' 
import Colors from '../constants/Colors'

import { windowWidth } from '../constants/screenSize' 


const BodyText = props => {
    return (
        <Text 
            style={{
                ...styles.text,
                ...props.style,
            }}>
            {props.children}
        </Text>
    )
}


const styles = StyleSheet.create({
    text:{
        color: Colors.secondary,
        fontFamily: 'RobotoMono-Regular',
        fontSize: windowWidth/15,
        fontWeight: 'bold',
    }
})


export default BodyText