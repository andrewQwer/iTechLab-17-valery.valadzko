import React from 'react'
import CartList from './CartListComponent'

const Cart = ({cart, totalCount, totalPrice, decrementCount, incrementCount}) => {
    const hasItems = cart.length > 0;
    const items = hasItems ? (
        cart.map(cart =>
            <CartList
                id={cart.id}
                name={cart.name}
                price={cart.price}
                count={cart.count}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                key={cart.id}
            />
        )
    ) : (
        <div>You didn't buy anything</div>
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
                    <div className='cart__items__title__count'>{totalCount}</div>
                    <div className='cart__items__title__total'>{totalPrice}&#36;</div>
                </div>
            </div>
        </div>
    )
}


export default Cart