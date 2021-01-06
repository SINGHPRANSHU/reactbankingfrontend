import "../components/componentscss/home.css"

export default function Home() {
    return (

        <div className="mediawidth" style={{display:"flex",justifyContent:"center",backgroundColor:"#efeded",flexDirection:"column"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
              
               <h1 >BANKING SYSTEM</h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-around",margin:"4em 0em"}}>
            <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style={{width:"300px",height:"300px"}}/>
                </div>
                <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                </div>
            </div>
            </div> 

            </div>
            <div style={{backgroundColor:"#b8b8b8"}}>
            <div style={{display:"flex",justifyContent:"center", marginTop:"4em",flexDirection:"row"}}>
                <h1>Our Partners</h1>
               
            </div>
            
            <div style={{display:"flex",justifyContent:"space-around", marginTop:"1em",flexDirection:"row"}}>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100px",height:"100px"}}/>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100px",height:"100px"}}/>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100px",height:"100px"}}/>
                 </div>
                 <div style={{display:"flex",justifyContent:"space-around", marginTop:"1em",flexDirection:"row"}}>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100px",height:"100px"}}/>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100px",height:"100px"}}/>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100px",height:"100px"}}/>
                 </div>
                 </div>
         </div>
        
    )
  }
  