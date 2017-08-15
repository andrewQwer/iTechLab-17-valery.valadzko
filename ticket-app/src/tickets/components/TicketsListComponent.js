import React from 'react';

export default function(props) {
    return (
        <div className='tickets'>
            {props.tickets.map(ticket => {
                return (
                    <div key={ticket.id} className='tickets__box'>
                        <div className='tickets__box__left'>
                            <img src={ticket.url} alt=''/>
                        </div>
                        <div className='tickets__box__right'>
                            <div className='tickets__box__right__name'>{ticket.name}</div>
                            <div className='tickets__box__right__title'>{ticket.title}</div>
                            <div className='tickets__box__right__price'>Cost: {ticket.price}</div>
                            <div className='tickets__box__right__count'>Current count: {ticket.count}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
