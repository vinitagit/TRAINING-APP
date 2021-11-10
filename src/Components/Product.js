import store from "../store";

function Product(props) {

    const addToCart=(idValue)=>{
        store.dispatch({type:'ADD_TO_CART',payload:{id: idValue}});
    }
    return (
        <div>
            {<ul key={props.productData.key}><li>{props.productData.name}{" "}<button onClick={()=>addToCart(props.productData.key)}>Add to cart</button></li></ul>}
        </div>
    )
}

export default Product;