import { connect } from 'react-redux'
import Register from '../components/RegisterComponent'
import {registerUser} from '../actions/RegisterActions'
import {logInSuccess} from 'Login/actions/LoginActions'

function mapStateToProps(store) {
    return store;
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser: (values) => {
            dispatch(registerUser(values))
                .then((response) => dispatch(logInSuccess(response)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Register)