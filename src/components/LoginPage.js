import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class LoginPage extends Component {
    state = {
        selectedUser: null
    }

    onSelectUser = (e) => {
        const authedId = e.target.value;
        this.setState({
            selectedUser: authedId
        })
    }

    onLogin = () => {
        this.props.dispatch(setAuthedUser(this.state.selectedUser))
    }

    render() {
        const { loading, users} = this.props
        return (
            <div className='login-page'>
                {loading 
                    ? null
                    : <div>
                        <div className='header'>
                            <div><b>Welcome to the Would You Rather App!</b></div>
                            <div>Please sign in to continue.</div>
                        </div>
                        <div className='content'>
                            <div>Sign in</div>
                            <div>
                                <select onChange={this.onSelectUser}>
                                    <option key='select' value=''>Select</option>
                                    {Object.keys(users).map((user) => (
                                        <option key={user} value={user}>
                                            {users[user].name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <button className='btn btn-primary login-button' onClick={this.onLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps({users}) {
    const isUsersEmpty = Object.keys(users).length <= 0
    return {
        loading: isUsersEmpty,
        users: isUsersEmpty ? null : users
    }
}

export default connect(mapStateToProps)(LoginPage)