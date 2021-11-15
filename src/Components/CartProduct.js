import store from "../store";
import "./CartProduct.css";
import {useState} from "react";

function CartProduct(props) {
    const[qtyValue, setQtyValue] = useState(props.productData.qty);

    const removeFromCart=(idValue)=>{
        store.dispatch({type:'REMOVE_FROM_CART', payload:{id: idValue}});
    }
    const onChangeHandler = (e) => {
        console.log('event value '+ e.target.value);
        setQtyValue(e.target.value);
        store.dispatch({type:'ADJUST_QUANTITY', payload:{id: props.productData.key, qty: e.target.value}});
    }

    const keyValue = props.productData.key;
    const qty = props.productData.qty;
    const price = props.productData.price;

    return (
        <div className="cartProductDisplay">
            {<ul className="cartProductUl"><li className="cartProductLi" key={keyValue.toString()}>
            <table width="80%">
                <thead><tr>
                    <th>  
                    {props.productData.name}
                    </th>
                    <th style={{width:"220px", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>
                    {props.productData.description}
                    </th>
                    <th>
                    <label htmlFor="qty">Qty</label>
                    <input style={{width:"30px"}} min = "1"  type = "number" id="qty" name = "qty" value={qtyValue}
                      onChange={onChangeHandler}/> {" "}{'X'}
                    </th>
                    <th>
                    Rs{props.productData.price} {'='}
                    </th>
                    <th>
                    {qty * price} 
                    </th>
  
        </tr></thead>
        <tbody></tbody>
      </table>
      <button style={{marginLeft:"7px", borderWidth:"0px", padding: "0px", float:"right", marginRight:"20px"}} onClick={()=>removeFromCart(props.productData.key)}><img style={{height:"20px", width:"20px"}}src={props.img}/></button>
               </li></ul>}
        </div>
    )
}

export default CartProduct;