let initialState = {
    count : 0,
    loginSuccess: false,
}

function CounterReducer(state=initialState, action) {
            switch(action.type){
                case 'INCREMENT':
                    return {
                        ...state.count,
                        count: state.count +1,
                    };
                case "loginSuccess": 
                return{
                    ...state,
                    loginSuccess: true
                };
                case "loginFail": 
                return{
                    ...state,
                    loginSuccess: false
                };
                default: return state
            }
    
}


export default CounterReducer;