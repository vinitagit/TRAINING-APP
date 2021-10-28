import store from "./store";
import CustomButton  from "./CustomButton";

function CounterAgain () {
 
    const Decrease=()=>{
        store.dispatch({type: 'DECREMENT'})
    };


    return (
        <div>
            <CustomButton action={Decrease} compName='CounterAgainComponent' buttonName='DECREASE' />
        </div>
    )
}


export default CounterAgain;