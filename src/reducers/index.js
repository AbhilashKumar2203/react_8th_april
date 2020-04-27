import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { loggedInReducer } from './loggedInReducer';
import { updateNameReducer } from './updateName';


export const rootReducer = combineReducers(
    {
        counter : counterReducer,
        loggedIn:loggedInReducer,
        updatedName:updateNameReducer
    }
)
