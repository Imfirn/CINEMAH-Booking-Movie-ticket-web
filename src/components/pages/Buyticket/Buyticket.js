import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'
import'./../../../App.css'
// import MovieimgNow from '../../movieDataNow'
const Buyticket =({data})=> {
    const {id} =useParams()
    return (
        <>
        <div className="Movie-section">
            <h2>details = {id} </h2>
            {data.filter(item => item.nm == id).map((item,index)=>(
               <div>
                   <h1>{item.nm}</h1>
                   <h1>{item.time}</h1>
               </div>

            ))}
        </div>
        </>
    )
}

export default Buyticket
