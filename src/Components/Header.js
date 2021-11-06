
import Cart from "./Cart";
function Header(props){
    return (<div><div><h1 style={{marginTop:"10px", marginBottom:"0px", borderBottom: "1px solid black"}}>{props.headerName}</h1></div>
    <div><Cart/></div></div>);
}
export default Header;
