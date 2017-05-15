import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';
import CoursesPage from './course/CoursesPage.js';
import UsersPage from './components/users/UsersPage';
import ManageCoursePage from './course/ManageCoursePage.js';
import ArticlesPage from './components/articles/ArticlesPage.js';
import BoxesPage from './components/boxes/BoxesPage.js';
import ExperimentPage from './components/experiments/ExperimentPage.js';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="users" component={UsersPage} />
        <Route path="articles" component={ArticlesPage} />
        <Route path="boxes" component={BoxesPage} />
        <Route path="experiments" component={ExperimentPage} />
    </Route>
);