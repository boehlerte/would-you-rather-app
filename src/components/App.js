import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import HomePage from './HomePage'
import QuestionPage from './QuestionPage'
import LoginPage from './LoginPage';
import { setAuthedUser } from '../actions/authedUser';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  logout = () => {
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    console.log(this.props)
    const { user, users, loggedOut } = this.props
    return (
      <Router>
        <Fragment>
          <div className='main-container'>
            {loggedOut 
              ? <LoginPage users={users}/>
              : <div className='container'>
                  <div className='nav row'>
                    <div className='col-6'>
                      <span>Home</span>
                      <span>New Question</span>
                      <span>Leader Board</span>
                    </div>
                    
                    <div className='col-6'>
                      <span className='user'>Hello, {user.name}</span>
                      <img src={user.avatarURL} alt='avatar' className='mini-avatar'/>
                      <button className='btn btn-link' onClick={this.logout}>Logout</button>
                    </div>
                    
                  </div>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/questions/:question_id' exact component={QuestionPage} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
      
    );
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    loggedOut: authedUser === null,
    user: authedUser !== null 
      ? users[authedUser]
      : null,
    users
  }
}

export default connect(mapStateToProps)(App);
