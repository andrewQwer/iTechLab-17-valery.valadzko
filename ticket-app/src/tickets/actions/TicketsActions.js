import * as actions from './TicketsConst'
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
        payload: json
    }
}

export function fetchTickets() {
    return function(dispatch) {
        axios.get('http://localhost:3001/tickets')
            .then(
                response => {
                    console.log(response.data);
                    dispatch(getTickets(response.data))
                }
            )
            .catch(
                error => console.log(error)
            )
    }
}