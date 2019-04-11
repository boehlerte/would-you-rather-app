import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';

class AnsweredQuestion extends Component {
    render() {
        const { question } = this.props
        const answer = question.answer
        const optionOneVotes = question.optionOne.votes.length
        const optionOnePercent = Math.floor(optionOneVotes/question.numVotes * 100) + '%';
        const optionTwoVotes = question.optionTwo.votes.length 
        const optionTwoPercent = Math.floor(optionTwoVotes / question.numVotes * 100) + '%';
        console.log('question', question);
        return (
            <div className='question'>
                <div className='row header'>
                    <b>Asked by {question.name}</b>
                </div>
                <div className='row content'>
                    <div className='author col-4'>
                        <img src={question.avatar} className='avatar row' alt='avatar'/>
                    </div>
                    <div className='options col-8'>
                        <div>Results</div>
                        <div className={answer === 'optionOne' ? 'result answer' : 'result'}>
                            <div>Would you rather {question.optionOne.text}?</div>
                            <div className='progress'>
                                <div 
                                    className='progress-bar' 
                                    role='progressbar' 
                                    aria-valuenow={optionOneVotes} 
                                    aria-valuemax={question.votes}
                                    style={{width: optionOnePercent}}
                                >{optionOnePercent}</div>
                            </div>
                            <div>
                                {optionOneVotes} out of {question.numVotes} votes
                            </div>
                        </div>

                        <div className={answer === 'optionTwo' ? 'result answer' : 'result'}>
                            <div>Would you rather {question.optionTwo.text}?</div>
                            <div className='progress'>
                                <div 
                                    className='progress-bar' 
                                    role='progressbar' 
                                    aria-valuenow={optionTwoVotes} 
                                    aria-valuemax={question.votes}
                                    style={{width: optionTwoPercent}}
                                >{optionTwoPercent}</div>
                            </div>
                            <div>
                                {optionTwoVotes} out of {question.numVotes} votes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: question 
                ? formatQuestion(users, question, authedUser)
                : null
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)