const initialState = {
    username: null,
    access: 'watcher'
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {...state, username: action.payload.username, access: action.payload.access};
        default:
            return state;
    }
}