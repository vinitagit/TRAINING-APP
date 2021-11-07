import store from "./../store";
import {connect} from "react-redux";
import React, {Component} from 'react';
function Cart(props){

    return (<div>Your Cart: [ {props.count} <i className="material-icons">shopping_cart</i>]

    </div>
    );
}
const mapStateToProps = function(state){
    console.log(state);
    return state;
}


const NewReduxClassBasedCounter = connect(
    mapStateToProps,
)(Cart);
export default NewReduxClassBasedCounter;