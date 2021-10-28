import store from "./store";
import CustomButton from "./CustomButton";

function Counter () {
    const Increase=()=>{
        store.dispatch({type: 'INCREMENT'})
    };

    return (
        <div>
            <CustomButton action={Increase} compName='CounterComponent' buttonName='INCREASE' />
        </div>
    )
}


export default Counter;