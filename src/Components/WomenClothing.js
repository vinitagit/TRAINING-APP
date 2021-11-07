
import Clothing from "./../assets/Clothing.json";
import Header from "./Header";
import store from "./../store";
import {connect} from "react-redux";
import Contact from './../Contact'

const WomenClothing =({WomenClothing})=>{
 return (
   <div>
     {WomenClothing.map((cloth)=>(
     <Contact/>
     ))}
   </div>
 );
};

const mapStateToProps = (state)=> {
  return {
    WomenClothing : state.shop.womenClothing,
  };
};

export default connect(mapStateToProps)(WomenClothing);