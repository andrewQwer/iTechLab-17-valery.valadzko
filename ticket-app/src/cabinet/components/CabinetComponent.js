import React, { Component } from 'react'

export default class Cabinet extends Component {
    render() {
        return (
            <div className='user-cabinet'>
                <span className='user-cabinet__title'>Личный кабинет</span>
                <div className='user-cabinet__name'>{this.props.loginReducer.firstname}</div>
                <div className='user-cabinet__second-name'>{this.props.loginReducer.secondname}</div>
                <div className='user-cabinet__email'>{this.props.loginReducer.email}</div>
                <div className='user-cabinet__ip'></div>
            </div>
        )
    }
}