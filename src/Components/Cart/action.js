import * as actionTypes from "./actionTypes";

export const addToCart = (itemId)=>{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}
