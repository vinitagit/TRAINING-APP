
import Clothing from "./../assets/Clothing.json";
import Header from "./Header";
import store from "./../store";

function MenClothing(){

  const Increase=()=>{
    store.dispatch({type: 'INCREMENT'});
};
    return (
<div>
          <Header className="header" headerName="Men Apparel" isCartPresent={true}/>
            {Clothing.map((cloth)=><ul><li key={cloth.key}>{cloth.name}{" "}<button onClick={Increase}>Add</button></li></ul>)}
        </div>
    )
}

export default MenClothing;