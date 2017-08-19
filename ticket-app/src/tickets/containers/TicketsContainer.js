import { connect } from 'react-redux'
import Tickets from '../components/TicketsComponent'
import { fetchTickets } from '../actions/TicketsActions'
import { addToCart } from 'Cart/actions/CartActions'

function mapStateToProps(store) {
    return {
        tickets: store.ticketsReducer.tickets,
        cart: store.cartReducer,
        isAuth: store.loginReducer.isAuth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTickets: () => {
            dispatch(fetchTickets());
        },
        addToCart: (id, name, count, price) => {
            dispatch(addToCart(id, name, count, price));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Tickets)