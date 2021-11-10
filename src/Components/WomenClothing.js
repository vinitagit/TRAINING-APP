import Header from "./Header";
import store from "./../store";
import {connect} from "react-redux";
import Product from "./Product";
import Cart from "./Cart";

function WomenClothing({womenClothing}){

    return (
       <div>
          <Header className="header" headerName="Women Apparel" />
          <Cart/>
            {womenClothing.map((cloth)=>
            <Product productData={cloth}/>)}
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        womenClothing : state.shop.womenClothing
    };
};

export default connect(mapStateToProps)(WomenClothing);