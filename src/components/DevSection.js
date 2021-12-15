import React from "react";
import "../App";
import NameCard from "./NameCard";
import NameMember from "./memberData.js";
import "./DevSection.css";
function DevSection() {
  return (
    <div className={"home__hero-section darkBg"}>
      <div style={{ textAlign: "center" }}>
          
        <div className="container">
          <div className="pack">
            <div className="txt">
            Frontend Developer
            </div>
          <div className="wrap-front">
            <div className="wrapper">
            <NameCard
              name={NameMember.front_1.name}
              picMem={NameMember.front_1.pic}
              id={NameMember.front_1.id}
            />
            <NameCard
              name={NameMember.front_2.name}
              picMem={NameMember.front_2.pic}
              id={NameMember.front_2.id}
            />
            <NameCard
              name={NameMember.front_3.name}
              picMem={NameMember.front_3.pic}
              id={NameMember.front_3.id}
            />
            </div>
          </div>
          </div>
          
          <div className="wrap-back">
          <div className="txt2">
            Frontend Developer
            </div>
          <div className="wrapper">
            <NameCard
              name={NameMember.back_1.name}
              picMem={NameMember.back_1.pic}
              id={NameMember.back_1.id}
            />
            <NameCard
              name={NameMember.back_2.name}
              picMem={NameMember.back_2.pic}
              id={NameMember.back_2.id}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevSection;
