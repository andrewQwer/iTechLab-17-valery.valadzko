const initialState = {
    cart: {}
};

export default function shoppingReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let temp = {...state.cart, [action.id]: {id: action.id, name: action.name}};
            return {...state, cart: temp}
/*
            return Object.assign({}, state, state.cart.push({id: action.id, name: action.name}));
*/
        }
        default:
            return state;
    }
}