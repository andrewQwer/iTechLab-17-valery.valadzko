import * as actions from 'Tickets/actions/TicketsConst'
import axios from 'axios'

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
                    dispatch(getTickets(response.data))
                }
            )
            .catch(
                error => console.log(error)
            )
    }
}