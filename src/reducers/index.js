import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { loggedInReducer } from './loggedInReducer';


export const rootReducer = combineReducers(
    {
        counter : counterReducer,
        loggedIn:loggedInReducer
    }
)
