import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './containers/Nav'
import Tickets from './containers/Tickets'
import Register from './containers/Register'
import Login from './containers/Login'
import UserCabinet from './containers/UserCabinet'


export default (
        <BrowserRouter>
                <Nav>
                    <Route exact path='/'/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/tickets' component={Tickets}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/user' component={UserCabinet}/>
                </Nav>
        </BrowserRouter>
)