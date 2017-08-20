import React from 'react';

export const CartItem = ({id, name, price, count, decrementCount, incrementCount, buyTickets, deleteCartItem, tickets}) => {
    return (
        <div className='cart__items__title'>
            <div className='cart__items__title__id'>{id}</div>
            <div className='cart__items__title__name'>{name}</div>
            <div className='cart__items__title__price'>&#36;{price}</div>
            <div className='cart__items__title__count'>
                <button
                    disabled={count === 1}
                    className='cart__items__title__button'
                    onClick={decrementCount.bind(this, id)}>-</button>
                <span>{count}</span>
                <button
                    disabled={tickets.count === count}
                    className='cart__items__title__button'
                    onClick={incrementCount.bind(this, id)}>+</button>
            </div>
            <div className='cart__items__title__total'>&#36;{price * count}</div>
            <button className='cart__items__title__buy' onClick={buyTickets.bind(this, id, count)}>Buy</button>
            <button className='cart__items__title__delete' onClick={deleteCartItem.bind(this, id)}>Delete</button>
        </div>
    )
};