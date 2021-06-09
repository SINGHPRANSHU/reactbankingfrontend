import {useContext} from "react";

import {TransactionContext} from "../context/transactioninfo"
import {LoginContext} from '../context/logindetais'
import { useHistory } from 'react-router-dom';

import "../components/componentscss/viewall.css"

export default function Transaction(){

    let [transaction,setTransaction] =useContext(TransactionContext);
    const [user, setUser] = useContext(LoginContext)
 
   
    const history = useHistory();
    if(!user.token){
      history.push("/login")
    }

     const list =transaction.map(tran=> (
            <tr key={tran._id}>
              <td>{tran._id}</td>
              <td>{tran.sender}</td>
              <td>{tran.senderid}</td>
              <td>{tran.receiver}</td>
              <td>{tran.receiverid}</td>
              <td>{tran.balance}</td>
              <td>{(new Date(tran.time)).toLocaleString()}</td>
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
            <th style={{textAlign:"center"}}>time</th>
          </tr>
        {list}
      </table>  
      )

}