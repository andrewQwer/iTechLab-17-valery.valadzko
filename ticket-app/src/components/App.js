import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav'
import Tickets from './Tickets'
import Register from './Register'
import Login from './Login'
import UserCabinet from './UserCabinet'


export default (
        <BrowserRouter>
                <Nav>
                    <Route exact path='/'/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/tickets' component={Tickets}/>
                    <Route exact path='/user' component={UserCabinet}/>
                    <Route exact path='/login' component={Login}/>
                </Nav>
        </BrowserRouter>
)