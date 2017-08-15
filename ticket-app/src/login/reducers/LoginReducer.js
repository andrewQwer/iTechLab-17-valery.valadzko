const initialState = {
    username: null,
    access: 'watcher',
    isAuth: false
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return {...state, isAuth: true, username: action.payload.username, access: action.payload.access, message: null};
        case 'LOG_IN_FAILED':
            return {...state, message: action.message};
        case 'LOG_OUT':
            return {...state, isAuth: false, username: null, access: 'watcher'};
        default:
            return state;
    }
}