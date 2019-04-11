import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

class QuestionPage extends Component {
    render() {
        const { id, isAnswered, questionExists } = this.props
        console.log(isAnswered)
        return (
            <div>
                { questionExists 
                    ?  <div className='question-container'>
                            {isAnswered
                                ? <AnsweredQuestion id={id} />
                                : <UnansweredQuestion id={id} />
                            }
                        </div>
                    : 
                        <div>
                            404: Question Not Found
                        </div>
                }
            </div>
           
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
    const { question_id } = props.match.params
    const questionExists = questions[question_id]

    return {
        id: question_id,
        questionExists,
        isAnswered: questionExists 
            && users[authedUser].answers[question_id]
    }
}

export default connect(mapStateToProps)(QuestionPage)