import { StyleSheet } from 'react-native'

import Colors from "../Colors";


export const inputStyles = StyleSheet.create({
    simpleInput: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.secondary,
        padding: 10,
        color: Colors.secondary,
    }
})