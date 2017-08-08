import * as actions from '../constants/Login'

export function authUserSuccess(user) {
    return {
        action: actions.AUTH_SUCCESS,
        user
    }
}

