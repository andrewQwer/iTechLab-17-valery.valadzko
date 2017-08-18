import React from 'react';

const CartList = ({id, name, price, count, decrementCount, incrementCount}) => {
    return (
        <div className='cart__items__title'>
            <div className='cart__items__title__id'>{id}</div>
            <div className='cart__items__title__name'>{name}</div>
            <div className='cart__items__title__price'>&#36;{price}</div>
            <div className='cart__items__title__count'>
                <button className='cart__items__title__button' onClick={(name) => decrementCount(name)}>-</button>
                <span>{count}</span>
                <button className='cart__items__title__button' onClick={(id) => incrementCount(id)}>+</button></div>
            <div className='cart__items__title__total'>&#36;{price * count}</div>
        </div>
    )
}

export default CartList;