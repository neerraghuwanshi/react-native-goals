import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native'

import Button from '../components/Button';
import BottomTabStackNavigator from './BottomTabStackNavigator';
import Colors from '../constants/Colors';
import { containerStyles } from '../constants/styles/containerStyles'


const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: Colors.primaryContrast,
            }}
            drawerContent={navData => (
                <View
                    style={{
                        ...containerStyles.centre,
                        ...containerStyles.fullScreen,
                    }}>
                    <Button
                        title='Goals'
                        type="text"
                        titleStyle={styles.buttonText}
                        onPress={()=>{
                            navData.navigation.navigate('Goals')
                        }}/>
                </View>
            )}>
            <Drawer.Screen 
                name="BottomTabStackNavigator"
                component={BottomTabStackNavigator} />
        </Drawer.Navigator>
    )
}


const styles = {
    buttonText :{
        color: 'white'
    }
}