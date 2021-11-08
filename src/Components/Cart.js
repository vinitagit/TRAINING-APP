import store from "./../store";
import {connect} from "react-redux";
import React, {Component} from 'react';
import {useState , useEffect} from "react";
const Cart =({cart})=>{
    const [cartCount, setCartCount]= useState(0);
    useEffect(()=>{
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        setCartCount(count);

    }, [cart, cartCount])

    return (<div>Your Cart: [ {cartCount} ]

    </div>
    );
}
const mapStateToProps = (state)=>{
    console.log(state);
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Cart);