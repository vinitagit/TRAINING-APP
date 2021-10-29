let initialState = {
    count : 0
}

function CounterReducer(state=initialState, action) {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            count: state.count +1,
        };
    }

if (action.type === 'DECREMENT') {
            return {
                ...state,
                count: state.count - 1,
            };
        }
if (action.type === 'RESET') {
                return {
                    ...state,
                    count: 0,
                };
            }
if( action.type == "loginSuccess"){
                return{
                    ...state,
                    loginSuccess: true
                };
            }
if( action.type == "loginFail"){
                return{
                    ...state,
                    loginSuccess: false
                };
            }
    
}


export default CounterReducer;