import React from 'react';

export default function(props) {
    return (
        <div>
            {
                props.shoppingReducer.map(ticket => {
                return (
                    <div key={ticket.id}>
                        <div>{ticket.name}</div>
                        <div>{ticket.title}</div>
                        <div>Cost: {ticket.price}</div>
                        <div>Current count: {ticket.count}</div>
                    </div>
                );
            })
            }
        </div>
    );
}
