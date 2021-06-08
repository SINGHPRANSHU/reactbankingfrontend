import React,{useState,createContext} from "react";

export const LoginContext =createContext();

export const LoginProvider =(props) =>{
    let [user, setUser] = useState({});


    return(
        <LoginContext.Provider value={[user, setUser]}>
          {props.children}
        </LoginContext.Provider>
    )
}