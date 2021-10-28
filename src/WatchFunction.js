import {useState} from "react";
function WatchFunction() {
    const[color, setColor] = useState("RED");


    return (
           <>
           <h1>{color}</h1>
           <button onClick={(event)=>setColor("Blue")}>Blue</button>
           <button onClick={(event)=>setColor("PINK")}>Blue</button>
           <button onClick={(event)=>setColor("Blue")}>Blue</button>
           </>
        );
}
export default WatchFunction;


