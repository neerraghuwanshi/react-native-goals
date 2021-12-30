export const SET_GOALS = 'SET_GOALS'
export const ADD_GOALS = 'ADD_GOALS'

export const setGoals = (goals) => {
    return {
        type: SET_GOALS,
        state: goals,
    }
}

export const addGoal = (goal) => {
    return {
        type: ADD_GOALS,
        goal,
    }
}