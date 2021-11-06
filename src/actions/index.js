import axios from "axios";

export const login =()=>{
    return()=>{
        return axios.post("/login",{username:store.getState().userName, password:store.getState().password}).then((res)=> {
            success = res.data;
          });
    }
}