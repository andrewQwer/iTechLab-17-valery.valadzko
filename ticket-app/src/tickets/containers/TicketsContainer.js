import { connect } from 'react-redux'
import Tickets from '../components/TicketsComponent'
import { fetchTickets } from '../actions/TicketsActions'

function mapStateToProps(store) {
    return {
        tickets: store.ticketsReducer.tickets
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTickets: () => {
            dispatch(fetchTickets());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Tickets)