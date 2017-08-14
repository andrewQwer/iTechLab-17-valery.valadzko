import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './nav/containers/NavigationContainer'
import Tickets from './tickets/containers/TicketsContainer'
import Register from './register/containers/RegisterContainer'
import Login from './login/containers/LoginContainer'
import UserCabinet from './cabinet/containers/CabinetContainer'


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