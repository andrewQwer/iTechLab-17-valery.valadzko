import React  from 'react'
import { connect } from 'react-redux'
import {renderTickets} from '../actions/Test'
import axios from 'axios'

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    prevPage() {
        if (this.props.currentPage === 1) {
            return null;
        } else {
            this.props.getTickets(this.props.currentPage - 1, this.props.limit)
        }
    }
    nextPage() {
        if (this.props.tickets.length === 0) {
            return null;
        } else {
            this.props.getTickets(this.props.currentPage + 1, this.props.limit)
        }
    }
    show(limit) {
        this.props.getTickets(1, limit)
    }
    componentWillMount () {
        this.props.getTickets(1, this.props.limit);
    }
    render() {

        if (this.props.tickets === undefined) {
            return null;
        } else {
            console.log(this.props.limit);
            let nodes = this.props.tickets.map((ticket) => {
                return (
                    <div style={{marginBottom: '15px'}} key={ticket.id}>
                        <div style={{color: 'red'}}>{ticket.id}</div>
                        <div>{ticket.name}</div>
                        <div>{ticket.count}</div>
                        <div>{ticket.eventTime}</div>
                        <div>{ticket.title}</div>
                        <div>{ticket.url}</div>
                    </div>
                )
            });
            return <div>
                <button onClick={this.prevPage.bind(this)}>{'<'}</button>
                <button onClick={this.show.bind(this, 2)}>2</button>
                <button onClick={this.show.bind(this, 5)}>5</button>
                <button onClick={this.nextPage.bind(this)}>{'>'}</button>
                <div>{nodes}</div>
            </div>
        }
    }
}

function mapStateToProps(store) {
    return {
        tickets: store.test.tickets,
        limit: store.test.limit,
        currentPage: store.test.currentPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTickets: (page, limit) => {
            dispatch((dispatch) => {
                axios.get(`http://localhost:3001/tickets?_page=${page}&_limit=${limit}`)
                    .then(
                        response => {
                            console.log(page, limit);
                            dispatch(renderTickets(response.data, page, limit))
                        }
                    )
                    .catch(
                        error => console.log(error)
                    )
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Test)