import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from './../../actions/userActions';

class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           user: {
               email:'',
               password:''
           }
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.userRow = this.userRow.bind(this);
    }

    handleChange(e) {
        if(e.target.id==='email') {
            let user = this.state.user;
            user.email = e.target.value;
            this.setState({
                user
            });
        }
        if(e.target.id==='password') {
            let user = this.state.user;
            user.password = e.target.value;
            this.setState({
                user
            });
        }
    }

    saveUser() {
       this.props.actions.createUser(this.state.user);
    }

    userRow(user, index) {
        return  <div key={index}>Email: {user.email} Password: {user.password}</div>;
    }

    render() {
        return(
            <div>
            <h1>This is the users page</h1>
            <div className="user_form">
                <label htmlFor="email">EMAIL:</label>
                <input id="email" type="text" onChange={this.handleChange}/>
                <label htmlFor="password">PASSWORD:</label>
                <input id="password" type="text" onChange={this.handleChange}/>
                <button className="btn btn-primary" onClick={this.saveUser}>Save user</button>
            </div>
            <h1>Registered users</h1>
            {this.props.users.map(this.userRow)}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users:state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);