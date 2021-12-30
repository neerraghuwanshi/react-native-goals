import React from 'react'
import { View, StyleSheet } from 'react-native'

import HeaderButton from './HeaderButton'
import MenuButton from '../../components/MenuButton'
import { containerStyles } from '../../constants/styles/containerStyles';
import Colors from '../../constants/Colors';
import { Icon } from 'react-native-elements';


export default HeaderLeftMenu = ({navData, displayBackButton}) => {

    const styles = StyleSheet.create({
        backButton: {
            marginLeft: 0,
        },
    })

    return (
        <View 
            style={{
                ...containerStyles.rowSpaceBetween,
            }}>
            {displayBackButton &&
            <HeaderButton
                style={styles.backButton}
                onPress={()=>navData.navigation.goBack()}>
                <Icon
                    name='arrow-left'
                    type='simple-line-icon'
                    size={20}
                    color={Colors.secondary}/>
            </HeaderButton>}
            <HeaderButton
                style={styles.menuButton}
                onPress={()=>navData.navigation.toggleDrawer()}>
                <MenuButton/>
            </HeaderButton>
        </View>
    )
}