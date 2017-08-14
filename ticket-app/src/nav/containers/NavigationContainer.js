import { connect } from 'react-redux'
import { logOut } from '../actions/NavigationActions'
import Nav from '../components/NavigationComponent'


function mapStateToProps(store) {
    return {
        loggedIn: store.navReducer.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Nav)
