import { GET_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ANSWER_QUESTION:
            const { id, authedUser, answer } = action;
            return {
                ...state,
                [id]: {
                    ...state[id],
                    [answer]: {
                        ...state[id][answer],
                        votes: state[id][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}