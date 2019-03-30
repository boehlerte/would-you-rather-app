import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import HomePage from './HomePage'
import QuestionPage from './QuestionPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className='main-container'>
            {this.props.loading 
              ? null  
              : <div>
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

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
