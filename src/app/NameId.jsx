import React from 'react'
import { Link } from 'react-router-dom'

function NameId({stN,stN2,BntAlrt}) {
    return (
        <div>
            <input id="i111" onChange={stN} placeholder="Name"></input>
            <input id="i111"  onChange={stN2} placeholder="Roll-Number"></input>
              
             <Link to="/Record">

                 
                 <button className=""  onClick={BntAlrt}>Enter</button>
                 
                 
                 </Link> 

        </div>
    )
}

export default NameId
