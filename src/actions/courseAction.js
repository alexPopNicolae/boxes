import * as types from './actionTypes';
import courseApi from './../api/mockCourseApi';

export function createCourse(course) {//asta e un action creator
    return { type:types.CREATE_COURSE, course };
}

export function deleteLastCourse() {
    return {type:types.DELETE_LAST_COURSE};
}

export function deleteAllCourses() {
    return {type:types.DELETE_ALL_COURSES};
}

export function loadCoursesSucces(courses) {
      return {type:types.LOAD_COURSES_SUCCES, courses};
}

export function updateCourseSucces(course) {
    return { type:types.UPDATE_COURSE_SUCCES, course };
}
export function createCourseSucces(course) {
    return {type: types.CREATE_COURSE_SUCCES, course };
}

//asta e un thunk pentru api call
export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSucces(courses));
        }).catch(error => {
            throw(error);
        });
    }
}

//asta e un thunk pentru a salva un curs
export function saveCourse(course) {
    return function(dispatch, getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSucces(savedCourse)):dispatch(createCourseSucces(savedCourse));
        }).catch(error => {
            throw(error);
        });
    }
}