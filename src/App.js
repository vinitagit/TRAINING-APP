import './App.css';
import Login from "./Login";
import Homepage from './Components/Homepage';
import Detail from './Detail';
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import WomenClothing from './Components/WomenClothing';
import MenClothing from './Components/MenClothing';

function App() {
  return (
    <div className="App">
<Router>
  <Switch>
    <Route exact path ="/" component={Login}/>
    <Route path ="/home"><Homepage/></Route>
    <Route path ="/womenApparel" component={WomenClothing}/>
    <Route path ="/menApparel" component={MenClothing}/>
    </Switch>
</Router>
  </div>
  );
}

export default App;
