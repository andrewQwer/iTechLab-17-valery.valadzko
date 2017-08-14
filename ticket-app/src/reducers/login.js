const initialState = {
    loggedIn: true
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOG_OUT':
            return {...state, loggedIn: action.payload};
        case 'LOG_IN':
            return {...state, loggedIn: action.payload};
        default:
            return state;
    }
}