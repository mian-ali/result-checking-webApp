import React from 'react'
// import { Link } from 'react-router-dom'
import './Admin.css'
import { Link } from 'react-router-dom'




function Admin({Adfuc,a}) {
    console.log(a,"aa");
    return (
        <div className="Pasword">
            <div class="typewriter">
            <h1 className="password-h1">Hi! Admin Please Enter Password</h1></div>
            
            <input id="pas-input" type="password" onChange={Adfuc}></input>
          
        
         {/* if   */}
        {a==123 && <Link to= "/NameId">  <button id="Record">Go..!</button></Link>}
        {/* else */}
        {a!=123 && <h1 style={{color:"white"}}>Worng Password</h1>}
        </div>
    )
}

export default Admin
