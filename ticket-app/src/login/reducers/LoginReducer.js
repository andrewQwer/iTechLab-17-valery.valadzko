const initialState = {
    username: null,
    access: 'watcher',
    isAuth: false
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return {...state,
                isAuth: true,
                username: action.payload.username,
                access: action.payload.access,
                firstname: action.payload.firstname,
                secondname: action.payload.secondname,
                email: action.payload.email,
                message: null};
        case 'LOG_IN_FAILED':
            return {...state, message: action.message};
        case 'LOG_OUT':
            return {...state,
                isAuth: false,
                username: null,
                access: 'watcher',
                firstname: null,
                secondname: null,
                email: null,
                message: null};
        case 'DELETE_MESSAGE':
            return {...state, message: null};
        default:
            return state;
    }
}