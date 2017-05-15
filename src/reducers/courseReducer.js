import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state=initialState.courses, action) { //asta e reducerul
    switch(action.type) {
        case types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
         case types.DELETE_LAST_COURSE:
            let newState = state.slice(0, state.length-1);
            return newState;
          case types.DELETE_ALL_COURSES:
            let newState1 = state.slice(state.length-1, state.length-1);  
            return newState1;
          case types.LOAD_COURSES_SUCCES:  
            return action.courses;
          case types.CREATE_COURSE_SUCCES:
            return [
                ...state,
                Object.assign({},action.course)
                ];  
          case types.UPDATE_COURSE_SUCCES:
            return [
                ...state.filter(course=> course.id != action.course.id),
                Object.assign({}, action.course)
            ];
        default:
            return state;    
    }
}