import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import { defaultNavOptions } from './defaultNavOptions'
import Progress, { ProgressScreenOptions } from '../screens/Progress';


const ProgressNavigator = createStackNavigator()

export default ProgressStackNavigator = () => {
    return (
        <ProgressNavigator.Navigator
            screenOptions={defaultNavOptions}>
            <ProgressNavigator.Screen 
                name="Progress"
                component={Progress}
                options={ProgressScreenOptions}/>
        </ProgressNavigator.Navigator>
    )
}