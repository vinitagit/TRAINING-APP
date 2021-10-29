import axios from "axios";
import {useState} from "react";
import store from "./store";
import "./Login.css";
import {useHistory} from "react-router-dom";
function Login(){
    const[username1, setUsername]=useState("");
    const[password1, setPassword]=useState("");
    const history = useHistory();

    const LoginUser=()=>{


        axios.post("/login",{username:username1, password: password1}).then((res)=>{
           store.dispatch({type:"loginSuccess"});
           history.push("/contacts");

        }).catch((err)=>{
            store.dispatch({type:"loginFail"});
        })

    };

    return (
        <div className="login">
            <input style={{width:"15rem"}} type="username" placeholder="enter username..." onChange={(e)=>setUsername(e.target.value)}/><br/>
            <input style={{marginTop:"0.5rem", width:"15rem"}} type="password" placeholder="enter password..." onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button style={{marginTop:"0.5rem"}} onClick={LoginUser}>Login</button>
        </div>
    )

}


export default Login;