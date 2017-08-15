import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className='main-app'>
                <header className='navigation'>
                    <Link className='navigation__logo' to='/'></Link>
                    <ul className='navigation__list'>
                        <li className='navigation__item'><Link to='/tickets'>Tickets</Link></li>
                        {
                            this.props.loginReducer.isAuth ?
                                <li className='navigation__item'><Link to='/user'>User</Link></li>
                            :
                                <li className='navigation__item'><Link to='/register'>Register</Link></li>
                        }
                        {
                            this.props.loginReducer.isAuth ?
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