import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import AddTicketsForm from 'Cabinet/components/AddTicketsForm'
import { TitleData } from 'Cabinet/components/TitleData'
import {Title} from 'Global/Components'

class Cabinet extends Component {
    addTicket(values) {
        axios.post('http://localhost:3001/tickets', {
            name: values.name,
            title: values.title,
            price: values.price,
            count: values.count,
            eventTime: values.eventTime,
            url: values.url
        })
            .then(() => {
            return 'Success';
            })
            .catch((error) => {
                return error
            })
    }

    render() {
        return (
            this.props.isAuth ?
                <div className='cabinet'>
                    <Title title='User cabinet'/>
                    <div className='cabinet__body'>
                        <div className='cabinet__body__left'>
                        <TitleData name='cabinet__body__left' title='First name: ' data={this.props.firstName}/>
                        <TitleData name='cabinet__body__left' title='Second name: ' data={this.props.secondName}/>
                        <TitleData name='cabinet__body__left' title='E-mail: ' data={this.props.email}/>
                        </div>
                        {
                            this.props.access === 'admin' ?
                                <div className='cabinet__body__right'>
                                    <div className='cabinet__body__right__title'>Add new tickets</div>
                                    <AddTicketsForm onSubmit={(values) => this.addTicket(values)}/>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>

                :

                <Redirect to={'/'}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.user.isAuth,
        firstName: state.user.firstname,
        secondName: state.user.secondname,
        email: state.user.email,
        access: state.user.access
    }
}

export default connect(mapStateToProps, null, null, {pure: false})(Cabinet)