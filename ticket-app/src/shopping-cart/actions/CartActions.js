import * as actions from './CartConst'

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