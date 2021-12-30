import React from 'react'
import { useDispatch } from 'react-redux'

import GoalAttribute from './components/GoalAttribute'
import { containerStyles } from '../constants/styles/containerStyles'
import { ScrollView } from 'react-native'
import { addGoal } from '../store/actions/goals'
import HeaderLeftMenu from './components/HeaderLeftMenu'
import Button from '../components/Button'


export default EditGoal = props => {

    const { preDefinedAttributes,  userDefinedAttributes } = props.route.params.goal

    const dispatch = useDispatch()

    const editGoal = {
        'Create Goal': addGoal({
            preDefinedAttributes: {
                name: 'Neer',
            },
            userDefinedAttributes: {
                name: 'Neer',
            },
            subGoals: [],
        })
    }

    const UserDefinedAttributes = Object.keys(userDefinedAttributes).map(
        attribute => {
            return (
                <GoalAttribute
                    key={attribute} 
                    title={attribute}
                    value={userDefinedAttributes[attribute]}
                    />
            )
        }
    )

    const PreDefinedAttributes = Object.keys(preDefinedAttributes).map(
        attribute => (
            <GoalAttribute
                key={attribute}
                title={attribute}
                value={preDefinedAttributes[attribute]}
                />
        )
    )

    return (
        <ScrollView
            style={{
                ...containerStyles.normal,
            }}
            contentContainerStyle={{
                ...containerStyles.fullScreen,
            }}>
            {PreDefinedAttributes}
            {UserDefinedAttributes}
            <Button 
                title={props.route.params.header}
                onPress={()=>dispatch(editGoal[props.route.params.header])}
                />
        </ScrollView>
    )
}


export const EditGoalScreenOptions = navData => {
    return {
        headerTitle: navData.route.params.header,
        headerLeft: () => (
            <HeaderLeftMenu
                displayBackButton
                navData={navData}
                />
        ),
    }
}