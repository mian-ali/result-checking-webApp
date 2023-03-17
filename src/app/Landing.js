import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
    return (
        <div>
            <h1 className="Landing-H1">Ruslt Checking</h1>

              <Link  to="/adminpage" >   <button id="AdminBtn1">Admin Panel</button></Link>
        
              <Link to= "/CheckRuslt">  <button id="RusltBtn1">Result Check</button></Link>
             

           
        </div>
    )
}

export default Landing
