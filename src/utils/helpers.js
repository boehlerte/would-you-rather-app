export function formatQuestion (questions, users, question, authedUser) {
  const { id, optionOne, optionTwo } = question
  const { name, avatarURL } = users[question.author]

  const isOptionOne = questions[id].optionOne.votes.includes(authedUser);
  const isOptionTwo = questions[id].optionOne.votes.includes(authedUser);
  let answer;
  if (isOptionOne) {
    answer = 'optionOne';
  } else if (isOptionTwo) {
    answer = 'optionTwo';
  }
  
  return {
    name,
    id,
    optionOne,
    optionTwo,
    answer,
    avatar: avatarURL,
    numVotes: optionOne.votes.length + optionTwo.votes.length
  }
}