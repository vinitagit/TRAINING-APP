import store from "../store";
import "./CartProduct.css";

function CartProduct(props) {

    const removeFromCart=(idValue)=>{
        store.dispatch({type:'REMOVE_FROM_CART', payload:{id: idValue}});
    }
    const keyValue = props.productData.key;
    const qty = props.productData.qty;
    const price = props.productData.price;
    return (
        <div className="cartProductDisplay">
            {<ul className="cartProductUl"><li className="cartProductLi" key={keyValue.toString()}>
            <table width="70%" style={{marginLeft:"20px"}}>
                <thead><tr>
                    <th>  
                    {props.productData.name}
                    </th>
                    <th>
                    {props.productData.description}
                    </th>
                    <th>
                    {props.productData.qty}
                    </th>
                    <th>
                       X
                    </th>
                    <th>
                    Rs{props.productData.price}
                    </th>
                    <th>
                       =
                    </th>
                    <th>
                    {qty * price} 
                    </th>
                    <th>
                    <button style={{marginLeft:"7px", borderWidth:"0px", padding: "0px"}} onClick={()=>removeFromCart(props.productData.key)}><img style={{height:"20px", width:"20px"}}src={props.img}/></button>
                    </th>
        </tr></thead>
        <tbody></tbody>
      </table>
               </li></ul>}
        </div>
    )
}

export default CartProduct;