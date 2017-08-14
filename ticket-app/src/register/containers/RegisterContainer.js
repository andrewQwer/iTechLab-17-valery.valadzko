import { connect } from 'react-redux'
import Register from '../components/RegisterComponent'

function mapStateToProps(store) {
    return store;
}

export default connect(mapStateToProps, null, null, {pure: false})(Register)