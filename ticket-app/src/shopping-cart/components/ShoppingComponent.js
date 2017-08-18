import React  from 'react'
import ItemsListComponent from '../components/ItemsListComponent'

export default class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.tempArr = [];
        this.cartObjToArr(this.props.cart);
    }
    cartObjToArr(obj) {
        for (let i in obj) {
            this.tempArr.push(obj[i]);
        }
        return this.tempArr;
    }
    render() {
        console.log(this.tempArr);
        if (this.props.cart === undefined) {
            return null;
        } else {
            return (
                <ItemsListComponent cart={this.tempArr}/>
            );
        }
    }
}