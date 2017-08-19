import React from 'react'
import CartList from './CartListComponent'

const Cart = ({cart, totalCount, totalPrice, decrementCount, incrementCount, buyTickets, tickets}) => {
    const hasItems = cart.length > 0;
    const items = hasItems ? (
        cart.map((cart) =>
            <CartList
                id={cart.id}
                name={cart.name}
                price={cart.price}
                count={cart.count}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                buyTickets={buyTickets}
                tickets={tickets[cart.id - 1]}
                key={cart.id}
            />
        )
    ) : (
        <div>You didn't bought anything</div>
    )

    return (
        <div className='cart'>
            <div className='cart__items'>
                <div className='cart__items__title blue'>
                    <div className='cart__items__title__id'>ID</div>
                    <div className='cart__items__title__name'>Film name</div>
                    <div className='cart__items__title__price'>Price</div>
                    <div className='cart__items__title__count'>Count</div>
                    <div className='cart__items__title__total'>Total</div>
                </div>
            </div>
            <div className='cart__items white'>{items}</div>
            <div className='cart__items'>
                <div className='cart__items__title blue'>
                    <div className='cart__items__title__id'></div>
                    <div className='cart__items__title__name'></div>
                    <div className='cart__items__title__price'></div>
                    <div className='cart__items__title__count'>{totalCount === 0 ? null : totalCount}</div>
                    <div className='cart__items__title__total'>{totalPrice === 0 ? null : '$'+totalPrice}</div>
                </div>
            </div>
        </div>
    )
}


export default Cart