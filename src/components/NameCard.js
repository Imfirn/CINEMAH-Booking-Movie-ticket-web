import React from "react";
import './NameCard.css'

const NameCard = ({picMem, name, d}) => {
  return (
    <div className="Namecard">
      <img
        className="mem-pic"
        src={picMem}
        alt=""
      />
      <div className="mem-id">
          {d}
          </div>
      <div className="mem-name">
          {name} 
          </div>
    </div>
  );
};

export default NameCard;
