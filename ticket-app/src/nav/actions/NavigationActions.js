import * as actions from './NavigationConst'
import axios from 'axios'

export function logInNav() {
    return {
        type: actions.LOG_IN_NAV,
        payload: true
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