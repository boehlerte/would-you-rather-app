import { getInitialData } from '../utils/api'
import { getUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

// TODO: make dynamic so user can select a login
const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}