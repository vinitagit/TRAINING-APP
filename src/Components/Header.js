
import Cart from "./Cart";
import CartImg from "./../assets/cart.png";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
function Header(props){
    const checkHeader = props.isCartPresent;
    const location = useLocation();
    const withCart = <div>
    <div><h1 style={{marginTop:"10px", marginBottom:"0px", float:"left", width:"600px"}}>
    {(location.pathname === '/home') && props.headerName}
    {(location.pathname === '/womenApparel') && (<div><Link to="/home">{props.headerName}</Link>{'>'}{props.headerName1}</div>)}
    </h1></div>
    <Link to="/cartItems">
    <img style={{height:"60px",width:"60px",marginLeft: "740px"}} src={CartImg}/><Cart/>
    </Link>

    <hr style={{margin:"0px"}}/>
    </div>;

    const withoutCart = <div>
    <div><h1 style={{marginTop:"10px", marginBottom:"0px"}}>
    {(location.pathname === '/home') && props.headerName}
    {(location.pathname === '/womenApparel') && (<div><Link to="/home">{props.headerName}</Link>{'>'}{props.headerName1}</div>)}
    {(location.pathname === '/cartItems') && (<div><Link to="/home">{props.headerName}</Link><Link to="/womenApparel">{'>'}{props.headerName1}</Link>{'>'}{props.headerName2}</div>)}
    </h1></div>
    <hr style={{margin:"0px"}}/>
    </div>;
    
    const renderData =  checkHeader? withCart : withoutCart;
    return renderData;
}
export default Header;
