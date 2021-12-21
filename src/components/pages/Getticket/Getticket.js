import React from "react";
import "./../../../App.css";
import { useParams } from "react-router-dom";
import { VscPass } from "react-icons/vsc"; //BsCheckCircle
import "./Getticket.css";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import axios from "axios";
import Bar from "../../../assets/barcode 1.png";
function Getticket({ data }) {
  const { id, da, tm, seat, price } = useParams();
  const timeout = async (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };
  const pushData = async () => {
    let formField = new FormData();

    formField.append("Name", id);
    formField.append("Seat", seat);
    formField.append("Date", da);

    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/History",
      data: formField,
    }).then((response) => {
      console.log(response.data);
    });
  };

  var selectseat = seat.split(",");
  return (
    <div className="wrap-ticket">
      <div className="all">
        <div className="e-ticket">
          <div className="img-m">
            {data
              .filter((item) => item.Name == id)
              .map((item, index) => (
                <>
                  <img
                    className="movie-img"
                    src={`/image/nowPic/Movie/${item.Name}/${item.Date}_1.jpg`}
                    alt=""
                  />
                </>
              ))}
          </div>

          <div className="mov-nm">
            <h1>{id}</h1>
          </div>
          <div className="info-up">
            <div className="select-t">
              <p>Seat</p>
              {selectseat.map((i) => (
                <h3 className="info-seat">
                  {i <= 8
                    ? "H"
                    : i <= 16
                    ? "G"
                    : i <= 24
                    ? "F"
                    : i <= 32
                    ? "E"
                    : i <= 40
                    ? "D"
                    : i <= 48
                    ? "C"
                    : i <= 56
                    ? "B"
                    : i <= 64
                    ? "A"
                    : null}
                  {i <= 8
                    ? i
                    : i <= 16
                    ? i - 8
                    : i <= 24
                    ? i - 16
                    : i <= 32
                    ? i - 24
                    : i <= 40
                    ? i - 32
                    : i <= 48
                    ? i - 40
                    : i <= 56
                    ? i - 48
                    : i <= 64
                    ? i - 56
                    : null}
                  ,
                </h3>
              ))}
            </div>
          </div>

          <div className="info-down">
            <div className="select-t">
              <p>Date</p>

              <h3 className="info-seat">{da}.2021</h3>
            </div>
            <div className="select-p">
              <p>Time</p>
              <h3 className="info-seat">{tm}</h3>
            </div>
          </div>
          <img src={Bar} alt=""/>
        </div>
        <div className="process">
          <div className="icon">
            <VscPass size="100px" />
            <h2>Success</h2>
          </div>
          <div className="txt_1">
            <p>Thank you for you Purchase </p>
            <p>"Please capture your ticket for confirm your Booking "</p>
          </div>
          <div className="txt-2">
            <hr
              style={{
                color: "#FFFF",
                backgroundColor: "#FFFF",
                height: 0.2,
                borderColor: "#FFFF",
              }}
            />
          </div>
          <div className="btn">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
                className="last-btn"
                buttonStyle="btn--ticket"

                onClick={
                  pushData                         
                    
                  
                }
              >
                Back to HOME
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getticket;