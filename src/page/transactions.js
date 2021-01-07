import {useContext} from "react";

import {TransactionContext} from "../context/transactioninfo"

import "../components/componentscss/viewall.css"

export default function Transaction(){

    let [transaction,setTransaction] =useContext(TransactionContext);


     const list =transaction.map(tran=> (
            <tr key={tran._id}>
              <td>{tran._id}</td>
              <td>{tran.sendername}</td>
              <td>{tran.senderid}</td>
              <td>{tran.receivername}</td>
              <td>{tran.receiverid}</td>
              <td>{tran.balance}</td>
            </tr>))
         
     

 
     
     return (
      <table className="customers">
          <tr key="0">
            <th style={{textAlign:"center"}}>transactionid</th>
            <th style={{textAlign:"center"}}>sender</th>
            <th style={{textAlign:"center"}}>senderid</th>
            <th style={{textAlign:"center"}}>receiver</th>
            <th style={{textAlign:"center"}}>receiverid</th>
            <th style={{textAlign:"center"}}>transferred</th>
          </tr>
        {list}
      </table>  
      )

}