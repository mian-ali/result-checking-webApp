import React from 'react'
import './Record.css'
import { Link } from 'react-router-dom'

function Record({eng,urd,math,pak,com,b}) {
    return (
        <div className="Record">
            

             <div className="Marks-sheet">


                 <h1 className="title">Marks Sheet</h1>

                 <p className="span1">English Marks:</p>
                 <br></br>
                 <input id="i1"title="text" placeholder="Add Number..." onChange={eng}></input>

                 <p className="span2">Urdu Marks:</p>
                 <br></br>
                 <input id="i1"title="text" placeholder="Add Number..." onChange={urd}></input>

                 <p className="span2">Math Marks:</p>
                 <br></br>
                 <input id="i1"title="text" placeholder="Add Number..." onChange={math}></input>

                 <p className="span2">PakStudy Marks:</p>
                 <br></br>
                 <input id="i1"title="text" placeholder="Add Number..." onChange={pak}></input>

                 <p className="span2">Computer Marks:</p>
                 <br></br>
                 <input id="i1"title="text" placeholder="Add Number..." onChange={com}></input>


                          <br></br>
<Link to= "/">
<button className="b" onClick={b}>UpDate</button>

</Link>
                     <button className="b">Go..Back</button>



             </div>



        </div>
    )
}

export default Record
