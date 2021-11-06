
import Clothing from "./../assets/Clothing.json";
import Header from "./Header";
import store from "./../store";

function MenClothing(){

  const Increase=()=>{
    store.dispatch({type: 'INCREMENT'});
};
    return (
<div>
          <Header className="header" headerName="Men Apparel" />
            {Clothing.map((cloth)=><ul><li key={cloth.id}>{cloth.name}{" "}<button onClick={Increase}>Add</button></li></ul>)}
        </div>
    )
}

export default MenClothing;