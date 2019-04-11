import React, { Component } from 'react'
import { connect } from 'react-redux'

class ScoreCard extends Component {
    render() {
        const { user, numAnswered, numCreated, total } = this.props
        return (
            <div className='scorecard row'>
                <div className='user col-4'>
                    <div><img className='user-img' src={user.avatarURL} alt='avatar'/></div>
                </div>
                <div className='user-stats col-4'>
                    <div className='user-name'>{user.name}</div>
                    <div className='row'>
                        <span className='col-8'>Answered:</span> 
                        <span className='col-4'>{numAnswered}</span>
                    </div>
                    <div className='row'>
                        <span className='col-8'>Created:</span>
                        <span className='col-4'>{numCreated}</span>
                    </div>
                </div>
                <div className='user-score col-4'>
                    <div className='row score-header'><span>Score</span></div>
                    <div className='row total'><span>{total}</span></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {userId}) {
    const numAnswered = Object.keys(users[userId].answers).length;
    const numCreated = users[userId].questions.length;
    return {
        user: users[userId],
        numAnswered,
        numCreated
    }
}

export default connect(mapStateToProps)(ScoreCard)