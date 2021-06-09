

import React,{useEffect,useContext} from "react";
import {UserProvider} from "./context/usersinfo"
import {TransactionProvider} from "./context/transactioninfo"
import {UserContext} from "./context/usersinfo"
import {TransactionContext} from "./context/transactioninfo"
import {LoginProvider} from "./context/logindetais"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./page/home";
import Viewall from "./page/viewallcustomers";

import TransferTO from "./page/transferto";
import  Transaction from "./page/transactions"
import  Stocks from "./page/stocks"
import  Login from "./page/login"
import  Me from "./page/me"
import {LoginContext} from './context/logindetais'


import Navbar from "./components/navbar";




function Routing() {

  let [customers,setCustomers] =useContext(UserContext);
  let [transaction,setTransaction] =useContext(TransactionContext);
  const [user, setUser] = useContext(LoginContext)

  let fetchdata = ()=>{
    let userFromLocal = localStorage.getItem("token")
    const expiry = localStorage.getItem("expiry")
    if(!user.token){
      if(!userFromLocal){
        return
      }
      if(expiry > (new Date()).getTime()){
          setUser(JSON.parse(userFromLocal))
          userFromLocal = JSON.parse(userFromLocal)
      }else{
       localStorage.removeItem("token")
       localStorage.removeItem("expiry")
       userFromLocal = {}
       setUser({})
      }
      if(!userFromLocal.token){
        localStorage.removeItem("token")
        localStorage.removeItem("expiry")
        setUser({})
        return
      }
      return
    }
   
    fetch('https://transactionrest.herokuapp.com/api/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${user.token}`
      },
    })
    .then(response => response.json())
    .then(data => {
      const newData = data.filter(d => d._id !== user._id)
      setCustomers([...newData])
       
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    fetch('https://transactionrest.herokuapp.com/api/customer', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${user.token}`
      },
    })
    .then(response => response.json())
    .then(data => {
      setTransaction([...(data.ids).reverse()])
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


useEffect(fetchdata,[user]);
  return (

   
    <Router>
      <div>
      
      <Navbar />   

        <Switch>
          
          <Route path="/viewall">
            <Viewall />
          </Route>
          <Route path="/transferto">
            <TransferTO />
          </Route>
          <Route path="/transactions">
            <Transaction />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default function App() {
  return (
    <LoginProvider>
    <TransactionProvider>
      <UserProvider>
        <Routing/>
      </UserProvider>
    </TransactionProvider>
    </LoginProvider>
   
  );
}





