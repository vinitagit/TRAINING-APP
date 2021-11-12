import './App.css';
import Login from "./Login";
import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WomenClothing from './Components/WomenClothing';
import MenClothing from './Components/MenClothing';
import CartItem from "./Components/CartItem";
import {connect} from "react-redux";

function App({cartValue}) {
  return (
    <div className="App">
<Router>
  <Switch>
    <Route exact path ="/" component={Login}/>
    <Route path ="/home"><Homepage/></Route>
    <Route path ="/womenApparel" component={WomenClothing}/>
    <Route path ="/menApparel" component={MenClothing}/>
    {(cartValue.length > 0) && (
    <Route path ="/cartItems" component={CartItem}/>
    )}
    </Switch>
</Router>
  </div>
  );
}

const mapStateToProps =(state)=>{
  return {
      cartValue : state.shop.cart
  }
}

export default connect(mapStateToProps)(App);
