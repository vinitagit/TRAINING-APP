import * as actionTypes from "./actionTypes";
import Clothing from "./../../assets/Clothing.json"

const initialState = {
    womenClothing: Clothing, // {key, name, price}
    cart:[], // {key,name, price, qty}
}


const CartReducer = (state = initialState, action)=>{

    switch(action.type) {
        case actionTypes.ADD_TO_CART: return {}
        default: return state
    }
}

export default CartReducer;