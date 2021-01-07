import {useState,useEffect} from "react"

import {
    NavLink 
  } from "react-router-dom";

import "./componentscss/navbar.css"

export default function Navbar(){
  const [scrolled,setScrolled]=useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
 

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let navbarClasses=[];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
return(
    
         <ul className={navbarClasses.join(" ")}>
            <li>
            <NavLink to="/"  exact={true} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}><svg style={{color:"#08292e",marginRight:"0.4em",marginBottom:"0.4em"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"/>
</svg> <h6 style={{fontWeight:"bold"}}>BANKING</h6></NavLink>
            </li>
            <div style={{float:"right",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <li>
            <NavLink to="/viewall"  activeClassName="linkbackground" ><h6 style={{fontWeight:"bold"}}>CUSTOMERS</h6></NavLink>
            </li>
            <li>
            <NavLink to="/transactions"  activeClassName="linkbackground" ><h6 style={{fontWeight:"bold"}}>TRANSACTIONS</h6></NavLink>
            </li>
           
            
            </div>
         </ul>
     
)
}

