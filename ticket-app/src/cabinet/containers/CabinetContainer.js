import { connect } from 'react-redux'
import Cabinet from '../components/CabinetComponent'
import { addTicket } from 'Cabinet/actions/CabinetActions'

function mapStateToProps(store) {
    return store;
}

function mapDispatchToProps(dispatch) {
    return {
        addTicket: (values) => {
            dispatch(addTicket(values))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Cabinet)