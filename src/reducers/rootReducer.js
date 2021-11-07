import { combineReducers } from 'redux';
import cartReducer from './../Components/Cart/reducer';
import CounterReducer from "./CounterReducer"


const rootReducer = combineReducers({shop: cartReducer});

export default rootReducer;