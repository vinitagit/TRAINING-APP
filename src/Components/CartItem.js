import CartProduct from "./CartProduct";
import deleteIcon from "./../assets/DeleteImage.png";
import {connect} from "react-redux";
const CartItem =({cartValue})=>{


    return (
        <div>
           { cartValue.map((cloth)=><CartProduct productData={cloth} img={deleteIcon}/>)}
        </div>

    )

}

const mapStateToProps=(state)=>{
    return {
        cartValue: state.shop.cart
    }
}
export default connect(mapStateToProps)(CartItem);