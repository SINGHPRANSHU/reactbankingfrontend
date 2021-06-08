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
        fetch('http://localhost:4000/api/customer', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${user.token}`
            },
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);
            setme(data)    
          })
          .catch((error) => {
            console.log('Error:', error);
          });
    },[])
    
    return (
        <div>
            {JSON.stringify(me)}
        </div>
    )
}