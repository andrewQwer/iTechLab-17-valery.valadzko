const initialState = {

};

export default function cart (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
                return {
                    ...state,
                    [action.id]: {
                        id: action.id,
                        name: action.name,
                        price: action.price,
                        count: state[action.id] ? state[action.id].count + 1 : 1
                    }
                };
        }
        case 'DECREMENT_COUNT':
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: state[action.id].name,
                    price: state[action.id].price,
                    count: state[action.id].count - 1
                }
            };
        case 'INCREMENT_COUNT':
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: state[action.id].name,
                    price: state[action.id].price,
                    count: state[action.id].count + 1
                }
            };
        case 'DELETE_CART_ITEM':
            delete state[action.id];
            return {...state};
        default:
            return state;
    }
}