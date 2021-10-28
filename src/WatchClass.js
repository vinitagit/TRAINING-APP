import { Component } from "react";

class WatchClass extends Component {
    constructor(props){
        super(props);
        this.state={
            color:"Red",
            price: 500,
            brand: "Titan"
        }

    }
    changeColor=()=>{
        this.setState(
            {color: "Blue",
            price: 1000,
        
        }
        
        )
    }
  
    render() {
        return (
      <div>
        <h1>My watch is {this.state.color} color.</h1>
        <h1>My watch is of {this.state.brand} brand and is costing {this.state.price}</h1>
        <button onClick={this.changeColor}>Change</button>
    </div>
        );
    }
}

export default WatchClass;
