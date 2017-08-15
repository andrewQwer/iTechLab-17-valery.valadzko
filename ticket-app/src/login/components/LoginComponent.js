import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let user, password;
        return (
            <div className='login'>
                <span className='login__title'>Login</span>
                <form onSubmit={(e) => {e.preventDefault(); this.props.getAccess(user.value, password.value)}}>
                    <input type='text' className='login__input' placeholder='Username' ref={node => { user = node }}/>
                    <input type='text' className='login__input' placeholder='Password' ref={node => { password = node }}/>
                    {
                        this.props.loginReducer.isAuth ?
                            <Redirect to={'/'}/>
                            :
                            <input className='login__button' type='submit' value='Sign in' />
                    }
                </form>
                <span>{this.props.loginReducer.message}</span>
            </div>
        )
    }
}

