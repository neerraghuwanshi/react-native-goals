import React from 'react'
import { View, StyleSheet } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Colors from '../../constants/Colors'
import { containerStyles } from '../../constants/styles/containerStyles'
import { inputStyles } from '../../constants/styles/inputStyles'


export default GoalsListHeader = props => {

    const { value, setValue } = props

    const navigateToEditGoal = () => {
        props.navigation.navigate('EditGoal', {
            header: 'Create Goal',
            goal: {
                preDefinedAttributes: {
                    name: 'Hi',
                },
                userDefinedAttributes: {
                    reason: '',
                },
                subGoals: [],
            }
        })
    }

    return (
        <>
            <Input
                placeholder='Search...'
                placeholderTextColor={Colors.primaryPair}
                style={{
                    ...inputStyles.simpleInput,
                    ...styles.input
                }}
                value={value}
                onChangeText={setValue}/>
            <View style={containerStyles.rowSpaceBetween}>
                <Button
                    type='text'
                    title='Create New'
                    onPress={navigateToEditGoal}/>
                <Button
                    type='text'
                    title='Sort'
                    onPress={()=>console.log('Sort')}/>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
    }
})