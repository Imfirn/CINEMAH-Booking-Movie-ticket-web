import React from "react";
import "./Banner.css";
import "./Button.css";
import Carousel from "./Carousel/Carousel";
import img from "./../assets/banner/4.jpg";
import img1 from "./../assets/banner/2.jpg";
import img2 from "./../assets/banner/3.jpg";
import { Button } from "./Button";
import { Link } from "react-router-dom";
function Banner({}) {
  return (
    <>
       <div className={'home__hero-section darkBg'}>
        
        <div className="banner">
          <Carousel>
            <div className="pic1">
              <img src={img} alt="placeholder" />
              <Link to="/ticket" className="btn-ticket">
                <Button buttonStyle="btn--ticket">Get ticket</Button>
              </Link>
            </div>
            <div className="pic1">
              <img src={img1} alt="placeholder" />
              <Link to="/ticket" className="btn-ticket">
                <Button buttonStyle="btn--ticket">Get ticket</Button>
              </Link>
            </div>
            <div className="pic1">
              <img src={img2} alt="placeholder" />
              <Link to="/ticket" className="btn-ticket">
                <Button buttonStyle="btn--ticket">Get ticket</Button>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Banner;
