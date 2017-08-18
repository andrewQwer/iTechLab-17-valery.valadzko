const initialState = {
};

export default function cartReducer (state = initialState, action) {
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
            console.log(action.id);
            return {...state, totalCount: state.totalCount - 1};
        case 'INCREMENT_COUNT':
            return {...state, totalCount: state.totalCount + 1};
        default:
            return state;
    }
}