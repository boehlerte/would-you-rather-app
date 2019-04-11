import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard';

class Leaderboard extends Component {
    render() {
        const { userTotals } = this.props
        return (
            <div>
                {userTotals.map((user) => (
                    <ScoreCard key={user.userId} userId={user.userId} total={user.total}/>
                ))}
            </div>
        )
    }
}


function mapStateToProps({users}) {
    const userIds = Object.keys(users);
    const userTotals = [];
    userIds.forEach((id) => {
        const numCreatedQuestions = users[id].questions.length;
        const numAnsweredQuestions = Object.keys(users[id].answers).length;
        const totalQuestions = numCreatedQuestions + numAnsweredQuestions;
        userTotals.push({userId: id, total: totalQuestions});
    })
    userTotals.sort((a,b) => a.total < b.total ? 1 : -1)
    return {
        userTotals
    }
}

export default connect(mapStateToProps)(Leaderboard)