import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    onChangeOptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        })
    }

    onChangeOptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        })
    }

    submitQuestion = () => {
        this.props.dispatch(
            handleAddQuestion(this.state.optionOne, this.state.optionTwo)
        )
        this.props.history.push('/')
    }

    render() {
        const { optionOne, optionTwo } = this.state
        return (
            <div className='question new-question'>
                <div className='row header'>
                    <b>Create New Question</b>
                </div>
                <div>
                    <div>Complete the question:</div>
                    <div className='question-form'>
                        <b>Would you rather...</b>
                        <div className='options'>
                            <input 
                                value={optionOne} 
                                type='text' 
                                placeholder='Enter Option One Text Here'
                                onChange={this.onChangeOptionOne}
                            ></input>
                            OR
                            <input 
                                vaulue={optionTwo} 
                                type='text' 
                                placeholder='Enter Option Two Text Here'
                                onChange={this.onChangeOptionTwo}
                            ></input>
                        </div>
                        <button className='btn btn-primary' onClick={this.submitQuestion}>Submit</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(connect()(NewQuestion))