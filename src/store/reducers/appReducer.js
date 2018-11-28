import { combineReducers } from 'redux';
import user from './user';
import company from './company';

const appReducer = combineReducers({
    user,
    company,
});

export default appReducer;