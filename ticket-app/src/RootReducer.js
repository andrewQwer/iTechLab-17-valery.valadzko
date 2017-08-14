import { combineReducers } from 'redux'
import navReducer from './nav/reducers/NavReducer'
import ticketsReducer from './tickets/reducers/TicketsReducer'
import loginReducer from './login/reducers/LoginReducer'

export default combineReducers({
    navReducer,
    ticketsReducer,
    loginReducer
})
