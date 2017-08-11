import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='navigation'>
                <div className='navigation__logo'/>
                <ul className="navigation__list">
                    <li className="navigation__item"><Link to='/'>Home</Link></li>
                    <li className="navigation__item"><Link to='/tickets'>Tickets</Link></li>
                    <li className="navigation__item"><Link to='/register'>Register</Link></li>
                    <li className="navigation__item"><Link to='/login'>Login</Link></li>
                    <li className="navigation__item"><Link to='/user'>User</Link></li>
                </ul>



                {
                    this.loggedIn ?
                        <button className='navigation__button'>Log out</button>
                        :
                        <button className='navigation__button'>Log in</button>
                }
                <div className='frame'>{this.props.children}</div>
                </div>

        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null, null, {pure: false})(Nav)
