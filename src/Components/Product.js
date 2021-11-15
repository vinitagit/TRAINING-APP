import store from "../store";
import "./Product.css";
function Product(props) {

    const addToCart=(idValue)=>{
        store.dispatch({type:'ADD_TO_CART',payload:{id: idValue}});
    }
    const keyValue = props.productData.key;
    console.log ('KeyValue'+ keyValue);
    return (
        <div className="productDisplay">
            {<ul className="productUl"><li className="productLi" key={keyValue+1}>{props.productData.name}{" "} Rs{props.productData.price}<button className="add" onClick={()=>addToCart(props.productData.key)}>Add to cart</button></li></ul>}
        </div>
    )
}

export default Product;