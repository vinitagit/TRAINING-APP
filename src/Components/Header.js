
import Cart from "./Cart";
import CartImg from "./../assets/cart.png";
import {Link} from "react-router-dom";
function Header(props){
    const checkHeader = props.isCartPresent;
    const withCart = <div>
    <div><h1 style={{marginTop:"10px", marginBottom:"0px", float:"left"}}>{props.headerName}</h1></div>
    <Link to="/cartItems">
    <img style={{height:"60px",width:"60px",marginLeft: "1090px"}} src={CartImg}/><Cart/>
    </Link>

    <hr style={{margin:"0px"}}/>
    </div>;

    const withoutCart = <div>
    <div><h1 style={{marginTop:"10px", marginBottom:"0px"}}>{props.headerName}</h1></div>
    <hr style={{margin:"0px"}}/>
    </div>;
    
    const renderData =  checkHeader? withCart : withoutCart;
    return renderData;
}
export default Header;
