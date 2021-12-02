import React, { useEffect,useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import "./Nowsection.css";
import axios from "axios";
// import img1 from "./../assets/nowPic/n1.jpg"
import MovieimgNow from "./movieDataNow";

function Nowsection() {
  const [nameMovie, setNameMovie] = useState(null);
  const timeout = async (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/MovieLH/").then((res) => {
      setNameMovie(res.data);
    });
  }, []);
  if (!nameMovie) return "error";

  const breakPoint = [
    { width: 400, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
    { width: 1500, itemsToShow: 6 },
  ];
  return (
    <div className={"home__hero-section darkBg"}>
      <div className="curr">
        <h1 className="txt1">Now Showing</h1>

        <Carousel breakPoints={breakPoint} pagination={false}>
          {nameMovie &&
            nameMovie.map((item, index) => (
              <div key={index}>
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              </div>
            ))}
        </Carousel>
      </div>
      <div className="nextMov">
        <div className="curr">
          <h1 className="txt1">Coming Soon</h1>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {MovieimgNow &&
              MovieimgNow.map((item) => (
                <Card number={item.nm} img={item.img} time={item.time} />
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Nowsection;
