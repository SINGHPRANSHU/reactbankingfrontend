import { useState, useEffect, useContext } from "react"
import {LoginContext} from "../context/logindetais"
import { useHistory } from 'react-router-dom';

export default function Me() {
    const [user, setUser] = useContext(LoginContext)
    const [me, setme] = useState({})
    const history = useHistory();
    if(!user.token){
        history.push("/login")      
    }

    useEffect(() => {
        fetch('https://transactionrest.herokuapp.com/api/customer', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${user.token}`
            },
          })
          .then(response => response.json())
          .then(data => {
            setme(data)    
          })
          .catch((error) => {   
          });
    },[])
    
    return (
      <div style ={{display:"flex", justifyContent:"center", height: "70vh", alignItems:"center"}}>
      <div class="card text-center border-secondary mb-3" style ={{width:"50em", height: "40vh"}}>
      <div class="card-header" style={{fontSize:"1.5em"}}>
        {me.name}
      </div>
      <div class="card-body" style ={{}}>
        <h5 class="card-title" style={{fontSize:"2em"}}>{me.email}</h5>
        <p class="card-text" style={{fontSize:"2.5em"}}>{`Available Balance : ${me.balance}`}</p>
        <button onClick = { () => history.push("/transactions") } class="btn btn-outline-primary" style={{fontSize:"1.5em"}}>See Your Transactions</button>
      </div>
      <div class="card-footer text-muted">
        {`Last Transaction on ${me.ids?new Date(me.ids[0].time).toLocaleString():null}`}
      </div>
    </div>
    </div>
    )
}