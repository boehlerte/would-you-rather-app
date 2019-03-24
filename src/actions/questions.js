import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
    }
}

function answerQuestion({id, authedUser, answer}) {
    return {
        type: ANSWER_QUESTION,
        id,
        authedUser,
        answer
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        return saveQuestionAnswer(info)
            .then(() => dispatch(answerQuestion(info)))
    }
}
