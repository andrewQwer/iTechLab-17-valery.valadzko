const initialState = {
};

export default function shoppingReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let temp;
            console.log(action.totalCount);
            if (state[action.id] === undefined) {
                temp = 1;
            } else if (action.totalCount === state[action.id].count) {
                temp = state[action.id].count;
            } else {
                temp = state[action.id].count+1;
            }
            return {...state, [action.id]: {name: action.name, count: temp}}
        }
        default:
            return state;
    }
}