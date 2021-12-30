import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';


function CenteredButton(props) {

    const {
        onPress,
        title,
        titleStyle,
        buttonStyle,
        mainContainerStyle,
        type,
    } = props

    return (
        <View style={mainContainerStyle}>
            <TouchableOpacity 
                onPress={onPress} 
                style={{
                    ...(
                        type ?
                        styles[`${type}Container`] :
                        styles.filledContainer
                    ), 
                    ...buttonStyle,
                }}>
                <Text 
                    style={{
                        ...(
                            type ?
                            styles[`${type}Title`] :
                            styles.filledTitle
                        ),  
                        ...titleStyle,
                    }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    filledContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.danger,
        borderRadius: 7,
        paddingVertical: 7,
        paddingHorizontal: 20,
    },
    filledTitle: {
        color: Colors.secondary,
        fontSize: 20,
        fontFamily: 'RobotoMono-Regular',
        fontWeight: 'bold',
    },
    textContainer: {
        padding: 5,
    },
    textTitle: {
        color: Colors.primaryButtonColor,
        fontSize: 20,
        fontFamily: 'RobotoMono-Regular',
        fontWeight: 'bold',
    },
})


export default CenteredButton