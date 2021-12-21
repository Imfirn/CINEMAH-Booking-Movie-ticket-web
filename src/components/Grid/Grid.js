import React from "react";
import './Grid.css';
import { Link } from "react-router-dom";

const Grid = ({ name, img,time }) => (
    <div className="Wrapper">
       
       <Link to={`/movie/${name}`} className='link'style={{ textDecoration: 'none' }}>
        <div className="mov-card">
            <div className="mov-pic">
            <img className="poster" src={img} alt=""/>
            </div>
            <div className="mov-name">
                    {name}
            </div>
            <div className="mov-name">
            <p className="text">RELEASE DATE</p>
            <p className="text">{time}</p>
            </div>
            </div>
        </Link>
    </div>
    
);

export default Grid;