import './App.css';
import Login from "./Login";
import Homepage from './Components/Homepage';
import Detail from './Detail';
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
  <Switch>
    <Route exact path ="/" component={Login}/>
    <Route path ="/home"><Homepage/></Route>
    </Switch>
</Router>
  </div>
  );
}

export default App;
