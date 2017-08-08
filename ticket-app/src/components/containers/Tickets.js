import React, { Component } from 'react'
import { connect } from 'react-redux'
import TicketsList from './TicketsList'

class Tickets extends Component {
    render() {
        return (
            <TicketsList tickets={this.props.tickets}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        tickets: state.tickets.tickets
    }
}

export default connect(mapStateToProps)(Tickets)