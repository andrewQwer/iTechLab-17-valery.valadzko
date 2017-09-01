import * as types from 'Tickets/actions/TicketsConst'
import axios from 'axios'

function getTickets(tickets, currentPage, limit) {
    return {
        type: types.GET_TICKETS,
        payload: {
            tickets: tickets,
            currentPage: currentPage,
            limit: limit
        }
    }
}

export const fetchTickets = (page, limit) => {
    return (dispatch) => {
        axios.get(limit === 'all' ? 'http://192.168.14.142:3001/tickets' : `http://192.168.14.142:3001/tickets?_page=${page}&_limit=${limit}`)
            .then(
                response => {
                    if (response.data.length === 0) {
                        return null;
                    }
                    dispatch(getTickets(response.data, page, limit))
                }
            )
            .catch(
                error => console.log(error)
            )
    }
};