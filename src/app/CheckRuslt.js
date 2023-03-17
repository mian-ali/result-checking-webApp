import React from 'react'
import './CheckResult.css'
import { Link } from 'react-router-dom'

function CheckRuslt({chec,ba}) {
    return (
        <div className="Check">

                <div className="card">
                    <h1 className="c-h1">Martic SSC -Part II Result 2020</h1>
                    <div className="c-d1">Serach By Roll No</div>
                    <h2 className="c-h2">Enter Roll No</h2>
                     <input  className="ii" onChange={chec}></input>

            <Link to= "/ShowData"> 
            <button className="bb" onClick={ba}>Get Result</button>
            
            </Link>

                </div>
        </div>
    )
}

export default CheckRuslt
