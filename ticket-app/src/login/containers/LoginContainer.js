import { connect } from 'react-redux'
import Login from '../components/LoginComponent'
import { fetchLogin } from '../actions/LoginActions'

function mapStateToProps(store) {
    return store
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAccess: (userName, password) => {
            dispatch(fetchLogin(userName, password))
                .then((response) => {
                response === 'success' ? (console.log('Nice'))  : (console.log('Wrong'));
                })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Login)