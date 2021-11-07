import * as actionTypes from "./actionTypes";
import Clothing from "./../../assets/Clothing.json";
let A;
 Clothing.map(cloth=>{
    A= cloth;
});

const initialState = {
    womenClothing: [
          A
    ],// {id, title, desc, price, img}
    MenClothing: [],// {id, title, desc, price, img}
    cart: [], // {id, title, desc, price, img, qty}
    currentItem: null,
}

const cartReducer = ( state= initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:  return {};
        case actionTypes.REMOVE_FROM_CART:  return {};
        case actionTypes.ADJUST_QUANTITY:  return {};
        case actionTypes.LOAD_CURRENT_ITEM:  return {};
        default:  return state;

    }
}

export default cartReducer;