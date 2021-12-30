import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import { defaultNavOptions } from './defaultNavOptions'
import Focus, { FocusScreenOptions } from '../screens/Focus';


const FocusNavigator = createStackNavigator()

export default FocusStackNavigator = () => {
    return (
        <FocusNavigator.Navigator
            screenOptions={defaultNavOptions}>
            <FocusNavigator.Screen 
                name="Focus"
                component={Focus}
                options={FocusScreenOptions}/>
        </FocusNavigator.Navigator>
    )
}