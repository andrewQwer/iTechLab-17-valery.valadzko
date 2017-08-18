import React  from 'react'
import { connect } from 'react-redux'
import Cart from '../components/CartComponent'
import {decrementCount, incrementCount} from '../actions/CartActions'


const CartContainer = ({cart, decrementCount, incrementCount}) => {
    let temp = [];
    for (let i in cart) {
        temp.push(cart[i]);
    }
    const getTotalCount = (temp) => {
        let totalCount = 0;
        let totalPrice = 0;
        for (let i in temp) {
            totalCount += temp[i].count;
            totalPrice += temp[i].count * temp[i].price;
        }
        return {totalCount, totalPrice};
    };
    let total = getTotalCount(cart);
    return <Cart
        cart={temp}
        totalCount={total.totalCount}
        totalPrice={total.totalPrice}
        decrementCount={decrementCount}
        incrementCount={incrementCount}
    />
};

function mapStateToProps(store) {
    return {
        cart: store.cartReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCount: (id) => {
            dispatch(incrementCount(id))
        },
        decrementCount: (id) => {
            dispatch(decrementCount(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(CartContainer)