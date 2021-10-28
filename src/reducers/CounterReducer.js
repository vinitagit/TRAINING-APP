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
    
}


export default CounterReducer;