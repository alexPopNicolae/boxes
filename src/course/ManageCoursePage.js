import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './../actions/courseAction';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course:Object.assign({}, props.course),
            errors:{}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.course.id);

    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course:course});
    }

    saveCourse(event) {
        event.preventDefault();
        toastr.success("Cursul a fost salvat");
        this.props.actions.saveCourse(this.state.course);
    }

    render() {
        return(<CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse} />
            );
    }
}


ManageCoursePage.propTypes = {
    course:React.PropTypes.object.isRequired,
    authors:React.PropTypes.array.isRequired,
    actions:React.PropTypes.isRequired
};

function getCourseById(course, id) {
    const curs = course.filter(course => course.id == id);
    if (curs) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;
    let course = {id:'', watchHref:'', title:'', authorId: '', length:'', category: ''};

    if(courseId) {
        course = getCourseById(state.course, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text:author.firstName + '  ' + author.lastName
        };
    });

    return {
        course:course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);