import React from 'react';

export default function(props) {
    return (
        <div className='tickets'>
            {props.tickets.map(ticket => {
                return (
                    <div className='tickets__box'>
                        <div key={ticket.id} className='tickets__box__list-item'>{ticket.name}</div>
                        <div key={ticket.id} className='tickets__box__list-item'>{ticket.price}</div>
                    </div>
                );
            })}
        </div>
    );
}
