import {useState, useEffect,useContext } from "react";
import { useLocation,useHistory } from "react-router-dom";
import "../components/componentscss/transferto.css"
import {UserContext} from "../context/usersinfo"
import "../components/componentscss/sendbutton.css"
import "../components/componentscss/declinebutton.css"



import {TransactionContext} from "../context/transactioninfo"




export default function TransferTo() {
  let [id,setId]=useState("");
  let [name,setName]=useState("");
  let [amount,setAmount]  = useState(1);
  let [selected,setSelected] = useState(0);
  let [comp,setComp] =useState(false);
  let [err,setErr] =useState(false);
  let [minerr,setMinerr] =useState(false);
  let [selecterr,setSelecrerr] =useState(false);
  let [loading,setLoading] = useState("");
  let [stringerr,setStringerr] = useState(false);

  let [receivers,setReceivers]=useState([]);
  let [customers,setCustomers] =useContext(UserContext);
  let [transaction,setTransaction] =useContext(TransactionContext);
  

  


  const location = useLocation();
  const history = useHistory();
  
  const compare = (str1,str2)=>{
   let result =str1.localeCompare(str2);
   if(result===0){
     return false
   }else{
     return true
   }
  }

  useEffect(() => {
    if(!location.state){
      history.push("/viewall")
      return
    }
    setId(location.state._id)
    setName(location.state.name)
    setReceivers(customers.filter(customer=>compare(customer._id,location.state._id)))
 }, [location]);
  
 

 const handleChange = (e)=>{
 e.preventDefault();
 setSelected(e.target.value) 
 setName()
 };


 const submitdata = (e)=>{
  e.preventDefault()
  setErr(false);
  setMinerr(false);
  setSelecrerr(false);
  setComp(false)
  if(typeof amount !== 'number'){
    setStringerr(true);
    setTimeout(() => {
      setStringerr(false)
    }, 2000);
    return
  }
  if(amount<=0){
    setMinerr(true);
    setTimeout(() => {
      setMinerr(false)
    }, 2000);
    return
  }
  if(selected===0){
    setSelecrerr(true);
    setTimeout(() => {
      setSelecrerr(false)
    }, 2000);
    return
  }
  setLoading("loader")
   const receiver = receivers.find(customer=>compare(customer._id,id));
   const data ={
    senderid:id,
    sendername:name,
    receivername:receiver.name,
    balance:parseInt(amount),
    receiverid:selected

   }
   console.log(data);
   
   fetch('https://transactionrest.herokuapp.com/api/customer/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
   
   if(result.status){
    setLoading("")
    setErr(true)
    setTimeout(() => {
      setErr(false)
    }, 3000);
   }else{
    setLoading("")
    setComp(true)
    setTimeout(() => {
     
    setComp(false)
     
    }, 3000);

    fetch('https://transactionrest.herokuapp.com/api/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(result =>{
     setCustomers([...result])
     })
   .catch(error=>{console.log(error);})

    
   fetch('https://transactionrest.herokuapp.com/api/alltransaction', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(result =>{
   setTransaction([...(result).reverse()])
   })
 .catch(error=>{console.log(error);})

    
    }
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });

 }
    


 
 return (
         
         
        <div className="transferdiv">
            <label for="fname">From</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." value={name}/>

            <label for="lname">Sender Id</label>
            <input type="text" id="lname" name="id" placeholder="Your Id" value={id}/>
           
            <label for="lname">Amount</label>
            <input type="text" id="lname" name="amount" placeholder="Enter amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>

            <label for="transfer to">Transfer To</label>
            <select  name="receiver" onChange={handleChange}  >
                <option value={selected} >select to transfer</option>
                  {receivers.map(customer=>(
                    
                      <option value={customer._id} >{customer.name}</option>
                    
                  ))}             
            </select>
            <div style={{display:"flex",flexDirection:"row"}} className="buttondiv">
              <div style={{width:"50%"}}>
              <button className=" button2" onClick={()=>{history.push("/viewall")}}>Decline</button>
              </div>
              <div style={{width:"50%"}}>
              <button className="button1" style={{float:"right"}} onClick={(e)=>submitdata(e)}>Transfer</button>
              </div>
            </div>
            
            {comp? <div style={{width:"100%"}}>
        <h6 style={{display:"flex",justifyContent:"center",color:"green"}} >Money Transferred</h6>
      </div>:<div></div>}
            {stringerr? <div style={{width:"100%"}}>
        <h6 style={{display:"flex",justifyContent:"center",color:"red"}} >Enter Valid Number</h6>
      </div>:<div></div>}
            {err? <div style={{width:"100%"}}>
        <h6 style={{display:"flex",justifyContent:"center",color:"red"}} >Please Check Your Balance</h6>
      </div>:<div></div>}
            {minerr? <div style={{width:"100%"}}>
        <h6 style={{display:"flex",justifyContent:"center",color:"red"}} >Send 1 Or More </h6>
      </div>:<div></div>}
            {selecterr? <div style={{width:"100%"}}>
        <h6 style={{display:"flex",justifyContent:"center",color:"red"}} >Select Someone </h6>
      </div>:<div></div>}
      
       <div style={{display:"flex",justifyContent:"center"}}>     
         <div class={loading} ></div>
      </div>   
        </div>
      
      
         );

  }