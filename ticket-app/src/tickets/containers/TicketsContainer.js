import React  from 'react'
import { connect } from 'react-redux'
import { fetchTickets } from 'Tickets/actions/TicketsActions'
import { addToCart } from 'Cart/actions/CartActions'
import TicketsList from 'Tickets/components/TicketsListComponent'

class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.checkbox = false;
    }

    componentWillMount() {
        this.props.getTickets();
    }

    render() {
        if (!this.props.tickets) {
            return null;
        } else {
            let nodes = this.props.tickets.map(ticket => {
                return <TicketsList
                    isAuth={this.props.isAuth}
                    checkbox={this.checkbox}
                    current={this.props.cart}
                    ticket={ticket}
                    addToCart={this.props.addToCart}
                    key={ticket.id}
                />
            })
            return (
                <div className='tickets'>
                    {nodes}
                </div>
            );
        }
    }
}

function mapStateToProps(store) {
    return {
        tickets: store.tickets.tickets,
        cart: store.cart,
        isAuth: store.user.isAuth
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