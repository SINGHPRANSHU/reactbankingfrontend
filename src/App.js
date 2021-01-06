

import React,{useEffect,useContext} from "react";
import {UserProvider} from "./context/usersinfo"
import {TransactionProvider} from "./context/transactioninfo"
import {UserContext} from "./context/usersinfo"
import {TransactionContext} from "./context/transactioninfo"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./page/home";
import Viewall from "./page/viewallcustomers";

import TransferTO from "./page/transferto";
import  Transaction from "./page/transactions"


import Navbar from "./components/navbar";




function Routing() {

  let [customers,setCustomers] =useContext(UserContext);
  let [transaction,setTransaction] =useContext(TransactionContext);

  let fetchdata = ()=>{
    fetch('https://transactionrest.herokuapp.com/api/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      setCustomers([...data])
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    fetch('https://transactionrest.herokuapp.com/api/alltransaction', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      setTransaction([...(data).reverse()])
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


useEffect(fetchdata,[]);
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
    <TransactionProvider>
      <UserProvider>
        <Routing/>
      </UserProvider>
    </TransactionProvider>
   
  );
}





