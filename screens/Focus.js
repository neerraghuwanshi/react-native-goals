import React from 'react'
import { View } from 'react-native'

import BodyText from '../components/BodyText'
import HeaderLeftMenu from './components/HeaderLeftMenu'
import { containerStyles } from '../constants/styles/containerStyles'


export default Focus = () => {

    return (
        <View
            style={{
                ...containerStyles.centre,
                ...containerStyles.fullScreen,
            }}>
            <BodyText>Focus</BodyText>
        </View>
    )
}


export const FocusScreenOptions = navData => {
    return {
        headerTitle: 'Focus',
        headerLeft: () => <HeaderLeftMenu navData={navData}/>,
    }
}