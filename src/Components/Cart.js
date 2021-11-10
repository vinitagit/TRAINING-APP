import {connect} from "react-redux";
import {useEffect, useState} from "react";
const Cart=({cart})=> {
    const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        let count =0;
        cart.forEach((item)=>{
            count += item.qty;
        });
        setCartCount(count);
    },[cart, cartCount])
    return (
        <div>
            Your cart: [{cartCount}]
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        cart : state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);