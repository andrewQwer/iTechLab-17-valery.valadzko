import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {registerUser} from 'Register/actions/RegisterActions'
import {logInSuccess} from 'Login/actions/LoginActions'
import RegistrationForm from 'Register/components/RegistrationForm'
import {Title} from 'Global/Components'

class Register extends Component {
    render() {
        return (
            this.props.isAuth ?
                <Redirect to={'/'}/>
                :
                <div className='registration'>
                    <Title title='Registration'/>
                    <RegistrationForm onSubmit={(values) => {this.props.registerUser(values)}}/>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.user.isAuth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser: (values) => {
            dispatch(registerUser(values))
                .then((response) => dispatch(logInSuccess(response)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Register)