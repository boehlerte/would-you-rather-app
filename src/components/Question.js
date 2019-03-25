import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        const { author, optionOne, optionTwo } = this.props.question
        return (
            <div className='question'>
                <div className='author'>
                    Author: {author}
                </div>
                <div className='options'>
                    Option 1: {optionOne.text}
                    Option 2: {optionTwo.text}
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions}, {id}) {
    const question = questions[id]

    return {
        question: question
    }
}

export default connect(mapStateToProps)(Question)