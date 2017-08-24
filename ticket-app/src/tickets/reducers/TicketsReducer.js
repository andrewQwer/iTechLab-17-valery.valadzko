import * as types from '../actions/TicketsConst'

const initialState = {

};

export default function tickets(state = initialState, action) {
    switch (action.type) {
        case types.GET_TICKETS:
            return {...state, tickets: action.payload}
        default:
            return state;
    }
}