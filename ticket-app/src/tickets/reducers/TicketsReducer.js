const initialState = {
};

export default function tickets(state = initialState, action) {
    switch (action.type) {
        case 'GET_TICKETS':
            return {...state, tickets: action.payload}
        default:
            return state;
    }
}