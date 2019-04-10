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
        isAnswered: questions[question_id].optionOne.votes.includes(authedUser) 
            || questions[question_id].optionTwo.votes.includes(authedUser)
    }
}

export default connect(mapStateToProps)(QuestionPage)