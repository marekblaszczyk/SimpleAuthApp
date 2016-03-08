import { combineReducers } from 'redux';
import AuthReducer from './authReducer'

const rootReducer = combineReducers({
//  state: (state = {}) => state
    auth: AuthReducer
});

export default rootReducer;
