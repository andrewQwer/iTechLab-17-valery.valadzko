import * as types from 'Tickets/actions/TicketsConst'
import axios from 'axios'

function getTickets(json) {
    return {
        type: types.GET_TICKETS,
        payload: json
    }
}

export function fetchTickets() {
    return function(dispatch) {
        axios.get('http://192.168.14.142:3001/tickets')
            .then(
                response => {
                    dispatch(getTickets(response.data))
                }
            )
            .catch(
                error => console.log(error)
            )
    }
}