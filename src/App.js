import './App.css';
import Login from "./Login";
import Contact from './Contact';
import Detail from './Detail';
import Counter from './Counter';
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
<Router>
  <div>
    <Link to="/">Home</Link>
  </div>
  <div>
    <Link to="/contacts">Contact</Link>
  </div>
  <div>
    <Link to="/details">More Details</Link>
  </div>
  <hr/>
  <Switch>
    <Route exact path ="/"><Login/></Route>
    <Route path ="/contacts"><Contact/></Route>
    <Route path ="/details"><Detail/></Route>
  </Switch>
</Router>
  </div>
  );
}

export default App;
