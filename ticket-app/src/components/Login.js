import React, {Component} from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/LoginActions'

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <span className='login__title'>Login</span>
                <input className='login__input'/>
                <input className='login__input'/>
                <div className='login__button-box__button'>
                    <input className='login__button' type='button' value='Sign in' onClick={this.props.logIn}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.login;
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => {
            dispatch(logIn())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Login)