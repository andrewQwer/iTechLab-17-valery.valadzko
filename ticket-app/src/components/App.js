import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './containers/Nav'
import Register from './containers/Register'
import Login from './containers/Login'

export default (
        <BrowserRouter>
                <Nav>
                        <Route path='/' component={Login}/>
                        <Route path='register' component={Register}/>
                </Nav>
        </BrowserRouter>
)