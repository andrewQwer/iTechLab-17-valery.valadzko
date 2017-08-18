import React from 'react';

export default function(props) {
    return (
        <div>
            {
                props.cart.map(ticket => {
                return (
                    <div key={ticket.id}>
                        <div>{ticket.id}</div>
                        <div>{ticket.name}</div>
                    </div>
                );
            })
            }
        </div>
    );
}
