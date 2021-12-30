import React, { useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import GoalsListHeader from './components/GoalsListHeader'
import Goal from './components/Goal'
import HeaderLeftMenu from './components/HeaderLeftMenu'
import List from '../components/List'
import { containerStyles } from '../constants/styles/containerStyles'


export default Goals = props => {

    const [search, setSearch] = useState('')

    const goals = useSelector(state => state.goals.goals)

    return (
        <View 
            style={{
                ...containerStyles.normal,
                ...containerStyles.fullScreen,
            }}>
            <List 
                listData={goals}
                Item={Goal}
                itemProps={{
                    navigation: props.navigation
                }}
                ListHeaderComponent={
                    <GoalsListHeader
                        navigation={props.navigation}
                        value={search}
                        setValue={setSearch}
                        />
                }
                keyExtractor={
                    item => item.preDefinedAttributes.name
                }
                />
        </View>
    )
}


export const GoalsScreenOptions = navData => {
    return {
        headerTitle: 'Goals',
        headerLeft: () => (
            <HeaderLeftMenu
                displayBackButton
                navData={navData}
                />
        ),
    }
}