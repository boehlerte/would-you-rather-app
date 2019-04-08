import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
    render() {
        const { user, location } = this.props
        return (
            <div className='nav row'>
                <div className='col-6'>
                    <span className={location.pathname === '/' ? 'active' : 'inactive'}><Link to='/'>Home</Link></span>
                    <span className={location.pathname === '/add' ? 'active' : 'inactive'}><Link to='/add'>New Question</Link></span>
                    <span className={location.pathname === '/leaderboard' ? 'active' : 'inactive'}><Link to='/leaderboard'>Leader Board</Link></span>
                </div>
                    
                <div className='col-6'>
                    <span className='user'>Hello, {user.name}</span>
                    <img src={user.avatarURL} alt='avatar' className='mini-avatar'/>
                    <Link to='/'>
                        <button className='btn btn-link' onClick={this.logout}>Logout</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar)