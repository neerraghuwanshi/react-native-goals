import React from 'react'
import { Text, StyleSheet } from 'react-native' 

import { windowWidth } from '../../constants/screenSize' 
import Colors from '../../constants/Colors'


const BodyText = (props) => {
    return (
        <Text 
            style={{
                ...styles.style,
                ...props.style,
            }}>
            {props.children}
        </Text>
    )
}


const styles = StyleSheet.create({
    style:{
        color: Colors.secondary,
        fontFamily: 'RobotoMono-Regular',
        fontSize: windowWidth/30,
        fontWeight: 'bold',
    }
})


export default BodyText