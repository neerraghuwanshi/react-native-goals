import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux'
import Thunk from 'redux-thunk'

import { goalsReducer } from './reducers/goals'


const reducer = combineReducers({
    goals: goalsReducer,
})


export const store = createStore(
    reducer,
    applyMiddleware(Thunk)
)