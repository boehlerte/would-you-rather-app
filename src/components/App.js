import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'

import HomePage from './HomePage'
import QuestionPage from './QuestionPage'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { user, users, loggedOut } = this.props
    return (
      <Router>
        <Fragment>
          <div className='main-container'>
            {loggedOut 
              ? <LoginPage users={users}/>
              : <div className='container'>
                  <NavBar user={user}/>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/questions/:question_id' exact component={QuestionPage} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
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
