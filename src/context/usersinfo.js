import React,{useState,createContext} from "react";

export const UserContext =createContext();

export const UserProvider =(props) =>{
    let [customers,setCustomers] = useState([]);


    return(
        <UserContext.Provider value={[customers,setCustomers]}>
          {props.children}
        </UserContext.Provider>
    )
}