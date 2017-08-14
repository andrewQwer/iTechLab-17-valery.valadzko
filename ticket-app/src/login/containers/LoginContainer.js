import { connect } from 'react-redux'
import Login from '../components/LoginComponent'
import { logIn } from '../actions/LoginActions'

function mapStateToProps(store) {
    return store
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => {
            dispatch(logIn())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Login)