import React from "react";
import './Grid.css';


const Grid = ({ name, img }) => (
    <div className="Wrapper">
       
        
        <div className="mov-card">
            <div className="mov-pic">
            <img className="poster" src={img} alt=""/>
            </div>
            <div className="mov-name">
                    {name}
            </div>
            
            </div>
    </div>
    
);

export default Grid;