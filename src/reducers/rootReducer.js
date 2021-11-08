import { combineReducers } from 'redux';
import CounterReducer from "./CounterReducer"


const rootReducer = combineReducers({CounterReducer1: CounterReducer});

export default rootReducer;