import * as actions from './NavigationConst'
import axios from 'axios'

export function logOut() {
    return {
        type: actions.LOG_OUT,
        payload: false
    }
}

function getTickets(json) {
    return {
        type: actions.GET_TICKETS,
        tickets: json
    }
}

export function fetchTickets() {
    return function(dispatch) {
        axios.get('http://localhost:3001/tickets')
            .then(
                response => dispatch(getTickets(response))
            )
            .catch(
                error => console.log(error)
            )
    }
}