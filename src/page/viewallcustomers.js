import {useEffect,useContext} from "react"
import "../components/componentscss/transferbutton.css"
import { useHistory } from 'react-router-dom';
import {UserContext} from "../context/usersinfo"
import "../components/componentscss/viewall.css"

export default function Viewall() {
 
  let [customers,setCustomers] =useContext(UserContext);
 
   
    const history = useHistory();

    

    const handleClick = (_id,name) => {
     
     
      history.push({pathname:"/transferto",search: '',state: { name,_id}});
  }

    

    let list = customers.map(customer=>(
      <div style={{display:"flex",flexDirection:"row",backgroundColor:"#bbb",margin:"2em",width:"80%",padding:"1em",border:"6px solid grey" }} key={customer._id} className="rootdiv">
        <div style={{display:"flex",flexDirection:"column",width:"40%"}}  > 
        <h4 style={{fontWeight:"bolder",float:"left"}}>Name</h4>
        <h4 style={{fontWeight:"bolder"}}>Email</h4>
        <h4 style={{fontWeight:"bolder"}}>CurBal</h4>

        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}} >
        <h4 style={{fontWeight:"bolder"}}>{customer.name}</h4>
        <h4 style={{fontWeight:"bolder"}}>{customer.email}</h4>
        <h4 style={{fontWeight:"bolder"}}>{customer.balance}</h4>
        
        <button className="button button1" onClick={()=>handleClick(customer._id,customer.name)}><span>Transfer</span></button>
        </div>
     
      </div>
    ));

    return (
    
   
     <div className="mediawidth" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#dff2f2"}}>
       {list}
     </div>
    
    
    
    );
  }
 