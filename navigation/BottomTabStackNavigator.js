import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import { defaultNavOptions } from './defaultNavOptions'
import Goals, { GoalsScreenOptions } from '../screens/Goals';
import EditGoal, { EditGoalScreenOptions } from '../screens/EditGoal';
import BottomTabNavigator, { BottomTabNavigatorScreenOptions } from './BottomTabNavigator'


const TabStack = createStackNavigator()

export default BottomTabStackNavigator = () => {
    return (
        <TabStack.Navigator
            screenOptions={defaultNavOptions}>
            <TabStack.Screen 
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={BottomTabNavigatorScreenOptions}/>
            <TabStack.Screen 
                name="Goals"
                component={Goals}
                options={GoalsScreenOptions}/>
            <TabStack.Screen 
                name="EditGoal"
                component={EditGoal}
                options={EditGoalScreenOptions}/>
        </TabStack.Navigator>
    )
}