import React from 'react';
import {Link} from 'react-router-dom'

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
                            {
                                ticket.count === 0 ?
                                    <div className='tickets__box__right__price'>Not available</div>
                                    :
                                    props.isAuth ?
                                        <button
                                            disabled={props.current[ticket.id] && props.current[ticket.id].count === props.tickets[ticket.id-1].count}
                                            className='tickets__box__right__button'
                                            onClick={props.addToCart.bind(ticket, ticket.id, ticket.name, ticket.count, ticket.price)}>Add to cart</button>
                                        :
                                        <Link to='/login'><button className='tickets__box__right__button'>Add to cart</button></Link>
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
