import React from 'react'
import'./card.css'

const Card =({number,img}) =>
<div className="card">
    
    <div className="test">
    <img className="pic" src={img} alt=""/>
    <div className="movieName">
        {number}
    </div>
    <div className="ticket">
    <button className="btn-ticket">Get tickets</button>
    </div>
    </div>
</div>

export default Card
