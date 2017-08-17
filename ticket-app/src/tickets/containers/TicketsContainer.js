import { connect } from 'react-redux'
import Tickets from '../components/TicketsComponent'
import { fetchTickets } from '../actions/TicketsActions'
import { addToCart } from 'Cart/actions/ShoppingActions'

function mapStateToProps(store) {
    return {
        tickets: store.ticketsReducer.tickets
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTickets: () => {
            dispatch(fetchTickets());
        },
        addToCart: (id, name, count) => {
            dispatch(addToCart(id, name, count));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Tickets)