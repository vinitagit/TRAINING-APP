import { combineReducers } from 'redux';
import CounterReducer from "./CounterReducer";
import CartReducer from "./../Components/Cart/reducer"


const rootReducer = combineReducers({counterReducer1: CounterReducer, shop: CartReducer});

export default rootReducer;