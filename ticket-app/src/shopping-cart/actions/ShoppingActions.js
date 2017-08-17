import * as actions from './ShoppingConst'

export function addToCart(id, name, totalCount) {
    return {
        type: actions.ADD_TO_CART,
        id,
        name,
        totalCount
    }
}