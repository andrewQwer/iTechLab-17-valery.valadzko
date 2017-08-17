import React, { Component } from 'react'
import FieldLevelValidationForm from 'Register/components/RegistrationForm'
import { Redirect } from 'react-router-dom'

export default class Register extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='registration'>
                {
                    this.props.loginReducer.isAuth ?
                        <Redirect to={'/'}/>
                        :
                        null
                }
                <span className='registration__title'>Registration</span>
                <FieldLevelValidationForm onSubmit={(values) => {this.props.registerUser(values)}}/>

            </div>
        )
    }
}

