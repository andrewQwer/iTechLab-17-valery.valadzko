import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { logOut } from '../actions/LoginActions'

class Nav extends Component {
    render() {
        return (
            <div className='main-app'>
                <header className='navigation'>
                    <div className='navigation__logo'/>
                    <ul className='navigation__list'>
                        <li className='navigation__item'><Link to='/'>Home</Link></li>
                        <li className='navigation__item'><Link to='/tickets'>Tickets</Link></li>
                        <li className='navigation__item'><Link to='/register'>Register</Link></li>
                        <li className='navigation__item'><Link to='/user'>User</Link></li>
                        {
                            this.props.loggedIn ?
                                <li className='navigation__item' onClick={this.props.logOut}>Log out</li>
                                :
                                <li className='navigation__item'><Link to='/login'>Log in</Link></li>
                        }
                        </ul>
                </header>
                <div className='frame'>{this.props.children}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.login;
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Nav)
