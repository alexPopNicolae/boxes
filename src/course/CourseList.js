import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';
import { Link } from 'react-router';

const CourseList = ({courses}) => {
    return (
        <div className="tabel">
            <div className="tabel_header">
                <div>Title</div>
                <div>Length</div>
                <div>Author</div>
                <div>Category</div>
            </div>
            {courses.map(course =>{
                return (
                    <div key={course.id} className="course_row">
                        <div><Link to="/course">{course.title}</Link></div>
                        <div>{course.length}</div>
                        <div>{course.authorId}</div>
                        <div>{course.category}</div>
                    </div>
                    )

            })}
        </div>
    );
}
export default CourseList;