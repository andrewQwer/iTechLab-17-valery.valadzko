import { connect } from 'react-redux'
import Cabinet from '../components/CabinetComponent'

function mapStateToProps(store) {
    return store;
}

export default connect(mapStateToProps, null, null, {pure: false})(Cabinet)