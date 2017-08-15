const initialState = {
    loggedIn: true
};

export default function navReducer(state = initialState, action){
    switch (action.type) {
        case 'LOG_OUT':
            return {...state, loggedIn: action.payload};
        default:
            return state;
    }
}