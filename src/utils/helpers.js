export function formatQuestion (users, question, authedUser) {
  const { id, optionOne, optionTwo } = question
  const { name, avatarURL } = users[question.author]
  
  return {
    name,
    id,
    optionOne,
    optionTwo,
    answer: users[authedUser].answers[id],
    avatar: avatarURL,
    numVotes: optionOne.votes.length + optionTwo.votes.length
  }
}