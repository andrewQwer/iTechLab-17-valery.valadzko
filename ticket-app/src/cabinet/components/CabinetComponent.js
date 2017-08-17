import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AddTicketsForm from 'Cabinet/components/AddTicketsForm'

export default class Cabinet extends Component {
    render() {
        return (
                    this.props.loginReducer.isAuth ?

                        <div className='user-cabinet'>
                            <span className='user-cabinet__title'>User cabinet</span>
                            <div className='user-cabinet__item'>First name: <span className='variable'>{this.props.loginReducer.firstname}</span></div>
                            <div className='user-cabinet__item'>Second name: <span className='variable'>{this.props.loginReducer.secondname}</span></div>
                            <div className='user-cabinet__item'>E-mail: <span className='variable'>{this.props.loginReducer.email}</span></div>
                            {
                                this.props.loginReducer.access === 'admin' ?
                                    <div className='user-cabinet__tickets-form'>Add new tickets<AddTicketsForm onSubmit={(values) => this.props.addTicket(values)}/></div>
                                    :
                                    null
                            }
                        </div>

                        :

                        <Redirect to={'/'}/>
        )
    }
}