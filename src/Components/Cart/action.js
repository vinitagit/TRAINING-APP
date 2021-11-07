import * as actionTypes from "./actionTypes";

export const addToCart = (itemId)=>{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart=(itemId)=>{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id: itemId
        }
    }
}

export const adjustQty = (itemId, value)=>{
    return {
        type: actionTypes.ADJUST_QUANTITY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}

export const loadCurrentItem = (item)=>{
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}