const initialState = {
    limit: 100,
    currentPage: 1
};

export default function test(state = initialState, action) {
    switch (action.type) {
        case 'GET_TICKETS':
            return {
                ...state,
                tickets: action.tickets,
                currentPage: action.currentPage,
                limit: action.limit
            };
        default:
            return state;
    }
}