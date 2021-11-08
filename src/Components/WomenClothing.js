
import Clothing from "./../assets/Clothing.json";
import Header from "./Header";
import store from "./../store";

function WomenClothing(){

    return (
       <div>
          <Header className="header" headerName="Women Apparel" />
            {Clothing.map((cloth)=><ul><li key={cloth.id}>{cloth.name}{" "}<button>Add to cart</button></li></ul>)}
        </div>
    )
}

export default WomenClothing;