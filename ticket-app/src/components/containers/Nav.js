import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='navigation'>
                <div className='navigation__logo'/>
                <Link to='/register'>Register</Link>
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

export default connect(mapStateToProps)(Nav)