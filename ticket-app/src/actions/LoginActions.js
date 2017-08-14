import * as actions from '../constants/Login'

export function logOut() {
    return {
        type: actions.LOG_OUT,
        payload: false
    }
}
export function logIn() {
    return {
        type: actions.LOG_IN,
        payload: true
    }
}