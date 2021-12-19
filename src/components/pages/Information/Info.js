import React from "react";
import { useParams } from "react-router-dom";
import "./../../../App.css";
import { BiTimeFive } from "react-icons/bi";
import ReactPlayer from "react-player";
import "./../Information/Info.css";
import { Link } from "react-router-dom";
function Info({ data }) {
  const { id } = useParams();
  return (
    <div>
      <div className={"home__hero-section darkBg"}>
        <div className="container-dev">
          <div className="Movie-section">
            {data
              .filter((item) => item.Name == id)
              .map((item, index) => (
                <>
                  <div className="movie-detail-row">
                    <div className="col">
                      <div className="poster-wrapper">
                        <img
                          className="movie-poster"
                          src={`/image/nowPic/Movie/${item.Name}/${item.Date}_1.jpg`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col">
                      <div className="movie-name">
                        <h1 className="name">{item.Name}</h1>
                        <div className="movie-date">
                          <p>RELEASE DATE</p>
                          <p>{item.FullDate}</p>
                        </div>
                        <div
                          className="time"
                          style={{
                            display: "flex",
                          }}
                        >
                          <BiTimeFive size="1.5em" />
                          <p className="timeData"> {item.Time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-video">
                      <div className="video-wrapper">
                        <ReactPlayer
                          className="vdo-movie"
                          url={item.linkTrailer}
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="information">
                    <h3 className="info">INFORMATIONS</h3>
                    <p>{item.Description}</p>
                  </div>
                  <div className="get-ticket">
                    <Link to={`/Buyticket/${id}`} className="buy-link">
                      <button className="btn-ticket">Get tickets</button>
                    </Link>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
