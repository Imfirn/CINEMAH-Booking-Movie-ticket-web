import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import "./Nowsection.css";
import axios from "axios";
import MovieimgNow from "./movieDataNow";

function Nowsection() {
  const [nameMovie, setNameMovie] = useState(null);
  const [actionMovie, setActionMovie] = useState(null);
  const [advanMovie, setAdvanMovie] = useState(null);
  const [ScifiMovie, setScifiMovie] = useState(null);
  const [ThrillerMovie, setThrillerMovie] = useState(null);
  const [HorrorMovie, setHorrorMovie] = useState(null);
  const [AnimationMovie, setAnimationMovie] = useState(null);
  const [ComedyMovie, setComedyMovie] = useState(null);
  const [FantasyMovie, setFantasyMovie] = useState(null);
  const timeout = async (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/MovieLH/").then((res) => {
      setNameMovie(res.data);
    });
  }, []);

  // if (!nameMovie) return "error";

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/ActionMovie/").then((res) => {
      setActionMovie(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/AdventureMovie/").then((res) => {
      setAdvanMovie(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/ThrillerMovie/").then((res) => {
      setThrillerMovie(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/ScifiMovie/").then((res) => {
      setScifiMovie(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/AnimationMovie/").then((res) => {
      setAnimationMovie(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/ComedyMovie/").then((res) => {
      setComedyMovie(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/FantasyMovie/").then((res) => {
      setFantasyMovie(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/HorrorMovie/").then((res) => {
      setHorrorMovie(res.data);
    });
  }, []);



  if (!actionMovie || !nameMovie) return "error";

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
        <div className="line"></div>
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
          <h1 className="txt1">Action Movie</h1>
          <div className="line"></div>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {actionMovie &&
              actionMovie.map((item) => (
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              ))}
          </Carousel>
        </div>
      </div>
      <div className="nextMov">
        <div className="curr">
          <h1 className="txt1">Adventure Movie</h1>
          <div className="line"></div>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {advanMovie &&
              advanMovie.map((item) => (
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              ))}
          </Carousel>
        </div>
      </div>
      <div className="nextMov">
        <div className="curr">
          <h1 className="txt1">Horror Movie
</h1>
          <div className="line"></div>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {HorrorMovie &&
              HorrorMovie.map((item) => (
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              ))}
          </Carousel>
        </div>
      </div>
      <div className="nextMov">
        <div className="curr">
          <h1 className="txt1">Scifi Movie</h1>
          <div className="line"></div>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {ScifiMovie &&
              ScifiMovie.map((item) => (
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              ))}
          </Carousel>
        </div>
      </div>
      <div className="nextMov">
        <div className="curr">
          <h1 className="txt1">Thriller Movie</h1>
          <div className="line"></div>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {ThrillerMovie &&
              ThrillerMovie.map((item) => (
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              ))}
          </Carousel>
        </div>
      </div>
      <div className="nextMov">
        <div className="curr">
          <h1 className="txt1">Animation Movie</h1>
          <div className="line"></div>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {AnimationMovie &&
              AnimationMovie.map((item) => (
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              ))}
          </Carousel>
        </div>
      </div>
      <div className="nextMov">
        <div className="curr">
          <h1 className="txt1">Comedy Movie</h1>
          <div className="line"></div>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {ComedyMovie &&
              ComedyMovie.map((item) => (
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              ))}
          </Carousel>
        </div>
      </div>
      <div className="nextMov">
        <div className="curr">
          <h1 className="txt1">Fantasy Movie</h1>
          <div className="line"></div>
          <Carousel breakPoints={breakPoint} pagination={false}>
            {FantasyMovie &&
              FantasyMovie.map((item) => (
                <Card
                  number={item.Name}
                  time={item.Time}
                  img={item.Date}
                  btn="True"
                />
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Nowsection;
