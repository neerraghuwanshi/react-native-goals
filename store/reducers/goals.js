import { SET_GOALS, ADD_GOALS } from '../actions/goals'


const initialState = {
    goals: [
        {
            userDefinedAttributes: {
                name: 'Break',
                deadline: 'Tommorow',
            },
            preDefinedAttributes: {
                name: 'Break',
                deadline: 'Tommorow',
            },
            subGoals: [],
        },
        {
            userDefinedAttributes: {
                name: 'Study',
                deadline: 'Today',
            },
            preDefinedAttributes: {
                name: 'Study',
                deadline: 'Today',
            },
            subGoals: [],
        },
    ],
}

export const goalsReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_GOALS:
            return {
                ...state,
                goals: action.goals,
            }
        case ADD_GOALS:
            return {
                ...state,
                goals: [...state.goals, action.goal],
            }
        default:
            return state
    }
}