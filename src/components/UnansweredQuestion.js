import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers';
import { handleAnswerQuestion } from '../actions/questions'

class UnansweredQuestion extends Component {

    state = {
        selectedOption: ''
    }

    onSubmit = () => {
        const info = {
            authedUser: this.props.authedUser,
            qid: this.props.question.id,
            answer: this.state.selectedOption
        }
        this.props.dispatch(handleAnswerQuestion(info))
    }

    render() {
        const { question } = this.props
        console.log('question', question);
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
                        <div><b>Would You Rather...</b></div>
                        <div>
                            <input 
                                type='radio' 
                                name={question.id} 
                                value='optionOne' 
                                onChange={(e)=>this.setState({selectedOption: e.target.value})}
                            />
                            <label className='option'>{question.optionOne.text}</label>
                        </div>
                        <div>
                            <input 
                                type='radio' 
                                name={question.id} 
                                value='optionTwo' 
                                onChange={(e) => this.setState({selectedOption: e.target.value})}
                            />
                            <label className='option'>{question.optionTwo.text}</label>
                        </div>
                        <button className='btn btn-primary submit-poll' onClick={this.onSubmit}>Submit</button>
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
                ? formatQuestion(questions, users, question, authedUser)
                : null
    }
}

export default connect(mapStateToProps)(UnansweredQuestion)