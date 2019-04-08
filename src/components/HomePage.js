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
        console.log(view)

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
                        {this.props.answered.map((id) => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>

                    : <ul className='unanswered list'>
                        {this.props.unanswered.map((id) => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}) {
    return {
        answered: Object.keys(questions)
            .filter((id) => {
                return questions[id].optionOne.votes.includes(authedUser)
                    || questions[id].optionTwo.votes.includes(authedUser)
            }),
        unanswered: Object.keys(questions)
            .filter((id) => {
                return !questions[id].optionOne.votes.includes(authedUser) 
                    && !questions[id].optionTwo.votes.includes(authedUser)
            })
    }
}

export default connect(mapStateToProps)(HomePage)
