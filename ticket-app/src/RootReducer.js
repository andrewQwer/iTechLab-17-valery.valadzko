import { combineReducers } from 'redux'
import navReducer from './nav/reducers/NavReducer'
import ticketsReducer from './tickets/reducers/TicketsReducer'
import loginReducer from './login/reducers/LoginReducer'
import registerReducer from './register/reducers/RegisterReducer'
import cabinetReducer from './cabinet/reducers/CabinetReducers'
import cartReducer from './shopping-cart/reducers/CartReducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    navReducer,
    ticketsReducer,
    loginReducer,
    registerReducer,
    cabinetReducer,
    cartReducer,
    form: formReducer
})
