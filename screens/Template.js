import React from 'react'
import { View } from 'react-native'

import BodyText from '../components/BodyText'
import HeaderLeftMenu from './components/HeaderLeftMenu'
import { containerStyles } from '../constants/styles/containerStyles'


export default Template = () => {
    return (
        <View
            style={{
                ...containerStyles.centre,
                ...containerStyles.fullScreen,
            }}>
            <BodyText>Template</BodyText>
        </View>
    )
}


export const TemplateScreenOptions = navData => {
    return {
        headerTitle: 'Template',
        headerLeft: () => (
            <HeaderLeftMenu
                displayBackButton
                navData={navData}
                />
        ),
    }
}