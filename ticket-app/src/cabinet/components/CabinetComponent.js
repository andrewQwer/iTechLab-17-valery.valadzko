import React, { Component } from 'react'

export default class Cabinet extends Component {
    render() {
        return (
            <div className='user-cabinet'>
                <span className='user-cabinet__title'>Личный кабинет</span>
                <div className='user-cabinet__name'/>
                <div className='user-cabinet__second-name'/>
                <div className='user-cabinet__email'/>
                <div className='user-cabinet__ip'/>
            </div>
        )
    }
}