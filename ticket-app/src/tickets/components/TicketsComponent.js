import React  from 'react'
import TicketsList from '../components/TicketsListComponent'

export default class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        console.log('FUCKING TICKETS!!!', this.props)
        this.props.getTickets();
    }

    render() {
        if (this.props.tickets === undefined) {
            return null;
        } else {
            return (
                <div className='tickets'>
                    <TicketsList tickets={this.props.tickets}/>
                </div>
            );
        }
    }
}