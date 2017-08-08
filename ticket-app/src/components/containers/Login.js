import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <span className='login__title'>Login</span>
                <input className='login__input'/>
                <input className='login__input'/>
                <div className='login__button-box__button'>
                    <input className='login__button' type='button' value='Sign in'/>
                </div>
            </div>
        )
    }
}