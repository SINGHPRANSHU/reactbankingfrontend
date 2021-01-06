import React,{useState,createContext} from "react";


export const TransactionContext =createContext();

export const TransactionProvider =(props) =>{
    let [transaction,setTransaction] = useState([]);


    return(
        <TransactionContext.Provider value={[transaction,setTransaction]}>
          {props.children}
        </TransactionContext.Provider>
    )
}