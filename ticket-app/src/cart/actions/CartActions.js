import * as actions from 'Cart/actions/CartConst'
import axios from 'axios'

export function addToCart(id, name, totalCount, price) {
    return {
        type: actions.ADD_TO_CART,
        id,
        name,
        totalCount,
        price
    }
}

export function incrementCount(id) {
    return {
        type: actions.INCREMENT_COUNT,
        id
    }
}

export function decrementCount(id) {
    return {
        type: actions.DECREMENT_COUNT,
        id
    }
}

export function deleteCartItem(id) {
    return {
        type: actions.DELETE_CART_ITEM,
        id
    }
}

export function buyTickets(id, count) {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/tickets/${id}`)
            .then((response) => {
                axios.put(`http://localhost:3001/tickets/${id}`, {...response.data, count: response.data.count - count})
                    .then(dispatch(deleteCartItem(id)))
            })
            .catch(error => {console.log(error);})
    }
}