import React  from 'react'
import TicketsList from '../components/TicketsListComponent'

export default class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.getTickets();
    }

    render() {
        if (this.props.tickets === undefined) {
            return null;
        } else {
            console.log(this.props.tickets);
            return (
                    <TicketsList tickets={this.props.tickets} addToCart={this.props.addToCart}/>
            );
        }
    }
}