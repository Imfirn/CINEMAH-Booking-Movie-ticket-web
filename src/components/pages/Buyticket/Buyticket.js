import React from "react";
import { useParams } from "react-router-dom";
import "./../../../App.css";
import "./../Buyticket/Buyticket.css";
import { BiTimeFive } from "react-icons/bi";

const Buyticket = ({ data }) => {
  const { id } = useParams();
  return (
    <>
      <div className={"home__hero-section darkBg"}>
        <div className="container">
        <div className="Movie-section">
          {data
            .filter((item) => item.nm == id)
            .map((item, index) => (
              <div
                className="movie-detail-row"
               
              >
                <div className="col">
                  <div className="poster-wrapper">
                    <img className="movie-poster" src={item.img} alt="" />
                  </div>
                </div>

                <div className="col">
                  <div className="movie-name">
                    <h1 className="name">{item.nm}</h1>
                    <div className="movie-date">
                      <p>RELEASE DATE</p>
                    </div>
                    <div
                      className="time"
                      style={{
                        display: "flex",                        
                      }}
                    >
                      <BiTimeFive size="1.5em" />
                      <p className="timeData"> {item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Buyticket;
