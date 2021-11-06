
import ShopWomen from "./../assets/shopWomens.jpg";
import ShopMen from "./../assets/shopMens.jpg";
import Header from "./Header";
import {Link} from "react-router-dom";
import "./Homepage.css";
function Homepage(){
    return (
    <div>
        <Header className="header" headerName="Shopify"/>
    <div style={{height: "650px"}}>
        <div
            style={{backgroundImage: `url(${ShopWomen})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", float:"left", height: "100%", width:"50%"}}>
                <Link to="/womenApparel">Shop Womens</Link>
        </div>
        <div
            style={{backgroundImage: `url(${ShopMen})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", float:"right", height: "100%", width:"50%"}}>
                <Link to="/menApparel">Shop Mens</Link>
        </div>
    </div>

   </div>
    )

}

export default Homepage;