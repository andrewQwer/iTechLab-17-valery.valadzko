import React  from 'react'
import ItemsListComponent from '../components/ItemsListComponent'

export default class Tickets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.shoppingReducer === undefined) {
            return null;
        } else {
            console.log(this.props.shoppingReducer);
            return (
                <ItemsListComponent tickets={this.props.shoppingReducer}/>
            );
        }
    }
}