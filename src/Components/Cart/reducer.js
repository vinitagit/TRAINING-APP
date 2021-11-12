import * as actionTypes from "./actionTypes";
import Clothing from "./../../assets/Clothing.json"

const initialState = {
    womenClothing: Clothing, // {key, name, price}
    cart:[], // {key,name, price, qty}
}


const CartReducer = (state = initialState, action)=>{

    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
        // Get the item data from the WomenClothing array
        const item = state.womenClothing.find((cloth)=>cloth.key=== action.payload.id);

        // whether the item is there in cart
        const inCart = state.cart.find((item)=>item.key === action.payload.id ? true: false);
        return {
            ...state,
            cart: inCart ? 
            state.cart.map((item)=> item.key === action.payload.id ? {...item, qty: item.qty +1}: item ):
            [...state.cart,{...item, qty: 1}],
        }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item)=>item.key !== action.payload.id)
            }
        case actionTypes.CHANGE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item)=>item.id === action.payload.id ? {...item,qty: action.payload.qty}: item )
            }
        default: return state
    }
}

export default CartReducer;