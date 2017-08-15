import React, {Component} from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    sendData(e) {
        e.preventDefault();
        this.props.getAccess(this.state.login, this.state.password)
    }
    render() {
        let user, password;
        return (
            <div className='login'>
                <span className='login__title'>Login</span>
                <form onSubmit={(e) => {e.preventDefault(); console.log('component call',user.value,password.value); this.props.getAccess(user.value, password.value)}}>
                    <input type='text' className='login__input' placeholder='Username' ref={node => { user = node }}/>
                    <input type='text' className='login__input' placeholder='Password' ref={node => { password = node }}/>
                    <input className='login__button' type='submit' value='Sign in' />
                </form>
            </div>
        )
    }
}

