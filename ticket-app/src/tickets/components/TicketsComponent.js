import React  from 'react'
import TicketsList from '../components/TicketsListComponent'

export default class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.checkbox = false;

    }

    componentDidMount() {
        this.props.getTickets();
    }

    render() {
        if (this.props.tickets === undefined) {
            return null;
        } else {
            return (
                    <TicketsList isAuth={this.props.isAuth} checkbox={this.checkbox} current={this.props.cart} tickets={this.props.tickets} addToCart={this.props.addToCart}/>
            );
        }
    }
}