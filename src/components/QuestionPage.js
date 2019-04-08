import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

class QuestionPage extends Component {
    render() {
        const { id, isAnswered } = this.props
        console.log(isAnswered)
        return (
            <div className='question-container'>
                {isAnswered
                    ? <AnsweredQuestion id={id} />
                    : <UnansweredQuestion id={id} />
                }
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { question_id } = props.match.params

    return {
        id: question_id,
        isAnswered: users[authedUser].answers[question_id] ? true : false
    }
}

export default connect(mapStateToProps)(QuestionPage)