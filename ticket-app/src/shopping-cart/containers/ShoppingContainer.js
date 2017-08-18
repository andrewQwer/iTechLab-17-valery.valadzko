import { connect } from 'react-redux'
import Shopping from '../components/ShoppingComponent'

function mapStateToProps(store) {
    return {
        cart: store.shoppingReducer.cart
    };
}

export default connect(mapStateToProps, null, null, {pure: false})(Shopping)