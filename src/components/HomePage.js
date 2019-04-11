import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class HomePage extends Component {
    state = {
        view: 'unanswered'
    }

    toggleView = (view) => {
        this.setState({
            view: view
        })
    }

    render() {
        const { view } = this.state

        return (
            <div className='questions-container'>
                <div className='tabs'>
                    <button
                        className={view === 'unanswered' ? 'active tab' : 'inactive tab'}
                        onClick={() => this.toggleView('unanswered')}>
                        Unanswered
                    </button>
                    <button
                        className={view === 'answered' ? 'active tab' : 'inactive tab'}
                        onClick={() => this.toggleView('answered')}>
                        Answered
                    </button>
                </div>
                <div className='questions-content'>
                    {view === 'answered' 
                    ? <ul className='answered list'>
                        {this.props.answered.map((question) => (
                            <li key={question.id}>
                                <Question id={question.id} />
                            </li>
                        ))}
                    </ul>

                    : <ul className='unanswered list'>
                        {this.props.unanswered.map((question) => (
                            <li key={question.id}>
                                <Question id={question.id} />
                            </li>
                        ))}
                    </ul>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}) {
    const questionIds = Object.keys(questions)
    const answered = [];
    const unanswered = [];

    questionIds.forEach(id => {
        if (users[authedUser].answers[id]) {
                answered.push(questions[id])
        } else {
            unanswered.push(questions[id])
        }
    })

    answered.sort((a,b) => a.timestamp < b.timestamp ? 1 : -1)
    unanswered.sort((a,b) => a.timestamp < b.timestamp ? 1 : -1)

    return {
        answered,
        unanswered 
    }
}

export default connect(mapStateToProps)(HomePage)
