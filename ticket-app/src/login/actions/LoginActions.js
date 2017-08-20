import * as actions from 'Login/actions/LoginConst'
import axios from 'axios'

export function logInSuccess(response) {
    return {
        type: actions.LOG_IN_SUCCESS,
        payload: response,
    }
}

export function logInFailed() {
    return {
        type: actions.LOG_IN_FAILED,
        message: 'Wrong username or password'
    }
}

export function logOut() {
    return {
        type: actions.LOG_OUT,
    }
}

export function deleteMessage() {
    return {
        type: actions.DELETE_MESSAGE
    }
}

export function fetchLogin(userLogin, userPassword) {
    return dispatch => {
        return axios.get('http://localhost:3001/users', {
            params: {
                username: userLogin,
                password: userPassword,
            }})
            .then(response => {
                dispatch(logInSuccess(response.data['0']));
            })
            .catch(() => {
                dispatch(logInFailed());
            });
    };
}