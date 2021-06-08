import {useState, useContext } from 'react';
import {LoginContext} from "../context/logindetais"
import { useHistory } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useContext(LoginContext)
    const history = useHistory();
    if(user.token){
        history.push("/")      
    }

    const getToken = (e) => {
       e.preventDefault()
       fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            if(data.status !== 500){
                setUser(data)
                history.push("/")
                }
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }
  return(
      <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
          {/* <form>
            <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            
            <input type="submit" onClick={(e) =>getToken(e)} value="LOGIN"></input>
          </form> */}
                <form style={{display:"flex", flexDirection:"column", width:"30%",marginTop:"10%"}}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e) => setEmail(e.target.value)}></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={(e) =>getToken(e)}>Submit</button>
                </form>
        </div>
  )
}