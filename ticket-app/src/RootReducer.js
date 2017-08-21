import { combineReducers } from 'redux'
import tickets from 'Tickets/reducers/TicketsReducer'
import user from 'Login/reducers/LoginReducer'
import cart from 'Cart/reducers/CartReducer'
import {reducer as formReducer} from 'redux-form'
import test from './test/reducers/Test'

export default combineReducers({
    tickets,
    user,
    cart,
    test,
    form: formReducer
})
