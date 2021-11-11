import store from "../store";
import "./CartProduct.css";

function CartProduct(props) {

    const removeFromCart=(idValue)=>{
        store.dispatch({type:'REMOVE_FROM_CART',payload:{id: idValue}});
    }
    const keyValue = props.productData.key;
    return (
        <div className="cartProductDisplay">
            {<ul><li key={keyValue.toString()}>{props.productData.name}{" "}<button style={{marginLeft:"7px", borderWidth:"0px", padding: "0px"}} onClick={()=>removeFromCart(props.productData.key)}><img style={{height:"20px", width:"20px"}}src={props.img}/></button></li></ul>}
        </div>
    )
}

export default CartProduct;