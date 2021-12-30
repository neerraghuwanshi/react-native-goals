import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import TitleText from '../../components/TitleText'
import BodyText from '../../components/BodyText'
import { containerStyles } from '../../constants/styles/containerStyles'


export default Goal = props => {

    const navigateToEditProfile = () => {
        props.navigation.navigate('EditGoal', {
            goal: props.itemData,
            header: 'Update Goal',
        })
    }

    return (
        <TouchableOpacity
            style={{
                ...containerStyles.card,
                ...styles.mainContainer,
            }}
            onPress={navigateToEditProfile}>
            <View 
                style={{
                    ...containerStyles.rowSpaceBetween,
                }}>
                <TitleText style={styles.text}>
                    {props.itemData.preDefinedAttributes.name}
                </TitleText>
                <BodyText style={styles.text}>
                    {props.itemData.preDefinedAttributes.deadline}
                </BodyText>
            </View>
            <View style={styles.colorContainer}>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    text: {
        marginHorizontal: 15,
        marginVertical: 10,
    },
    colorContainer: {
        position: 'absolute',
        backgroundColor: 'green',
        zIndex: -1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
})