import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import { defaultNavOptions } from './defaultNavOptions'
import Tasks, { TasksScreenOptions } from '../screens/Tasks';


const TasksNavigator = createStackNavigator()

export default TasksStackNavigator = () => {
    return (
        <TasksNavigator.Navigator
            screenOptions={defaultNavOptions}>
            <TasksNavigator.Screen 
                name="Tasks"
                component={Tasks}
                options={TasksScreenOptions}/>
        </TasksNavigator.Navigator>
    )
}