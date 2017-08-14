import * as actions from '../actions/LoginConst'

export function logIn() {
    return {
        type: actions.LOG_IN,
        payload: true
    }
}