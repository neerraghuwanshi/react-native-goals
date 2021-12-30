import React from 'react'
import { TextInput } from 'react-native'


export default Input = props => {
    return (
        <TextInput
            keyboardType='default'
            autoCapitalize='none'
            {...props}
            />
    )
}