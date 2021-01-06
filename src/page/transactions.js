import {useContext} from "react";

import {TransactionContext} from "../context/transactioninfo"

import "../components/componentscss/viewall.css"

export default function Transaction(){

    let [transaction,setTransaction] =useContext(TransactionContext);


     const list =transaction.map(tran=> (
            <tr>
              <td>{tran.sendername}</td>
              <td>{tran.senderid}</td>
              <td>{tran.receivername}</td>
              <td>{tran.receiverid}</td>
              <td>{tran.balance}</td>
            </tr>))
         
     

 
     
     return (
      <table className="customers">
          <tr>
            <th >sender</th>
            <th >senderid</th>
            <th>receiver</th>
            <th>receiverid</th>
            <th>transferred</th>
          </tr>
        {list}
      </table>  
      )

}