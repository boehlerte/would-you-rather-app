import { GET_USERS } from '../actions/users'
import { ANSWER_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION:
            const { id, authedUser, answer } = action;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [id]: answer
                    }
                }
            }
        default:
            return state
    }
}