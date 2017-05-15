//this is the root reducer
import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import users from './userReducer';


const rootReducer = combineReducers ({
    courses,
    users,
    authors
});

export default rootReducer;