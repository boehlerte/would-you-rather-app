import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';
import { withRouter } from 'react-router-dom'

class Question extends Component {

    toPoll = (e, id) => {
        e.preventDefault()
        this.props.history.push(`/questions/${id}`)
    }

    render() {
        const { question } = this.props
        console.log('question', question)
        return (
            <div className='question'>
                <div className='row header'>
                    <b>{question.name} asks:</b>
                </div>
                <div className='row content'>
                    <div className='author col-4'>
                        <img src={question.avatar} className='avatar row' alt='avatar'/>
                    </div>
                    <div className='options col-8'>
                        <b>Would you rather</b>
                        <div>...{question.optionOne.text.substring(0, 15)}...</div>
                        <button 
                            className='btn btn-outline-primary view-poll'
                            onClick={(e) => this.toPoll(e, question.id)}
                        >View Poll</button>
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
                ? formatQuestion(question, users, authedUser)
                : null
    }
}

export default withRouter(connect(mapStateToProps)(Question))