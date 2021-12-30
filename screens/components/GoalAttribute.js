import React from 'react'
import { View, StyleSheet } from 'react-native'

import TitleText from '../../components/TitleText'
import { containerStyles } from '../../constants/styles/containerStyles'
import { inputStyles } from '../../constants/styles/inputStyles'
import Input from '../../components/Input'


export default GoalAttribute = props => {

    const { title, value } = props

    return (
        <View 
            style={{
                ...containerStyles.rowSpaceBetween,
                ...styles.container,
            }}>
            <TitleText>
                {title[0].toUpperCase() + title.slice(1)}
            </TitleText>
            <Input
                placeHolder={title}
                value={value} 
                style={{
                    ...inputStyles.simpleInput,
                    ...styles.input,
                }}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    input: {
        width: '45%',
        textAlign: 'center',
    },
})