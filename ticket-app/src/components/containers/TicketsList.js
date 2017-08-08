import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
    console.log(props);
    return (
        <div className='tickets'>

            {props.tickets.map(ticket => {

                return (
                    <div key={ticket.id} className='data-list-item'>{ticket.name}</div>
                );

            })}

        </div>
    );
}
