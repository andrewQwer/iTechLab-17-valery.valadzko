import { connect } from 'react-redux'
import { logOut } from 'Login/actions/LoginActions'
import Nav from '../components/NavigationComponent'


function mapStateToProps(store) {
    return store
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Nav)
