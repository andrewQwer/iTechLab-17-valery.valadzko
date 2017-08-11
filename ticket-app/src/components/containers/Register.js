import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className='login'>
                <span className='login__title'>Registration</span>
                <input className='login__input'/>
                <input className='login__input'/>
                <div className='login__button-box__button'>
                    <input className='login__button' type='button' value='Sign up'/>
                </div>
            </div>
        )
    }
}

