
import ShopWomen from "./../assets/shopWomens.jpg";
import ShopMen from "./../assets/shopMens.jpg";
import Header from "./Header";
function Homepage(){
    return (
    <div>
        <Header className="header"/>
        <hr/>
    <div style={{height: "650px"}}>
        <div
            style={{backgroundImage: `url(${ShopWomen})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", float:"left", height: "100%", width:"50%"}}>
        </div>
        <div
            style={{backgroundImage: `url(${ShopMen})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", float:"right", height: "100%", width:"50%"}}>
        </div>
    </div>

   </div>
    )

}

export default Homepage;