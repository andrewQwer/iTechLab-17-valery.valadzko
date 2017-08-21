export function renderTickets(tickets, currentPage, limit) {
    return {
        type: 'GET_TICKETS',
        tickets: tickets,
        currentPage: currentPage,
        limit: limit
    }
}