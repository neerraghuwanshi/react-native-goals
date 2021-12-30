import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

import Colors from '../constants/Colors'
import FocusStackNavigator from './FocusStackNavigator'
import ProgressStackNavigator from './ProgressStackNavigator'
import TasksStackNavigator from './TasksStackNavigator'
import TabBarLabel from './components/TabBarLabel'


const Tab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: { 
                    backgroundColor: Colors.primary,
                    borderTopColor: Colors.transparent,
                },
                activeTintColor: Colors.secondary,
                keyboardHidesTabBar: true,
            }}>
            <Tab.Screen 
                name="Tasks" 
                component={TasksStackNavigator}
                options={{
                    tabBarLabel: ({focused}) => {
                        return (
                            focused ?
                            <TabBarLabel>
                                Tasks
                            </TabBarLabel> :
                            null
                        )
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='tasks'
                            type='font-awesome'
                            size={size}
                            color={color}/>
                    ),
                }}/>
            <Tab.Screen
                name="Focus" 
                component={FocusStackNavigator}
                options={{
                    tabBarLabel: ({focused}) => {
                        return (
                            focused ?
                            <TabBarLabel>
                                Focus
                            </TabBarLabel> :
                            null
                        )
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='nuclear-outline'
                            type='ionicon'
                            size={1.2 * size}
                            color={color}/>
                    ),
                }}/>
            <Tab.Screen 
                name="Progress" 
                component={ProgressStackNavigator}
                options={{
                    tabBarLabel: ({focused}) => {
                        return (
                            focused ?
                            <TabBarLabel>
                                Progress
                            </TabBarLabel> :
                            null
                        )
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='graph'
                            type='octicon'
                            size={size}
                            color={color}/>
                    ),
                }}/>
        </Tab.Navigator>
    )
}


export const BottomTabNavigatorScreenOptions = () => {
    return {
        headerShown: false,
    }
}