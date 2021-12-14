import React from "react";
import "../App";
import NameCard from "./NameCard";
import NameMember from"./memberData.js";
function DevSection() {
  return (
    <div className={"home__hero-section darkBg"}>
        <div className="container">
      <div style={{ textAlign: "center" }}>
        
        {NameMember &&
            NameMember.map((item, index) => (
              <div key={index}>
                <NameCard
                name={item.name}
                picMem={item.pic}
                d={item.id}
                />
              </div>
            ))}
         
         </div>
      </div>
    </div>
  );
}

export default DevSection;
