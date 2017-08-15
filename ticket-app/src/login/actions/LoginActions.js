import * as actions from '../actions/LoginConst'
import axios from 'axios'

export function logIn(response) {
    return {
        type: actions.LOG_IN,
        payload: response
    }
}

export function fetchLogin(userLogin, userPassword) {
    return dispatch => {
        console.log(userLogin, userPassword);
        return axios.get('http://localhost:3001/users', {
            params: {
                username: userLogin,
                password: userPassword,
            }})
            .then(response => {
                dispatch(logIn(response.data['0']));
            })
            .catch(error => console.log('unknown user' + error));
    };
}