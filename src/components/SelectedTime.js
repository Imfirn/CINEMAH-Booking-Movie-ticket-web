import React, { useState } from "react";
// import Carousel from "./Carousel/Carousel";
import { useParams } from "react-router-dom";
import "./SelectedTime.css";
import "./Navbar.css";
import Carousel from "react-elastic-carousel";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import SelectSeat from "./SelectSeat";
// import Movie from "./Movie";

function SelectedTime({ data, name, Date }) {
  const { id } = useParams();
  var dateSelect = Date.split(",");
  var x,
    y,
    check,
    check1 = false;
  var showtime =["12.00","17.30"];
  const [day, setDay] = useState([null]);
  const [time, setTime] = useState([null]);
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const [appState, changeState] = useState({
    ActiveObject: null,
    object: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ],
  });
  const [appState_2, changeState_2] = useState({
    ActiveObject: null,
    object: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ],
  });
  function toggleActive_2(index) {
    changeState_2({ ...appState_2, ActiveObject: appState_2.object[index] });
  }

  function toggleActiveStyles_2(index) {
    if (appState_2.object[index] === appState_2.ActiveObject) {
      return "select active";
    } else {
      return "select inactive";
    }
  }

  function toggleActive(index) {
    changeState({ ...appState, ActiveObject: appState.object[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.object[index] === appState.ActiveObject) {
      return "select active";
    } else {
      return "select inactive";
    }
  }
  const breakPoint = [
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 2 },
  ];
  return (
    <div>
         <h1 className="txt1"> Select Showtime</h1>
        <div className="line"></div>
      {data
        .filter((item) => item.Name == id)
        .map((item, index) => (
          <div className="selected">
         
            <div className="wrap-date">
              <div className="st">
                <p>Select Day</p>
                <div className="line-s"></div>
              </div>
              <div className="day">
                <Carousel breakPoints={breakPoint} pagination={false}>
                  {/* {item.day.map((j, k) => ( */}
                    {dateSelect.map((element,index) => (
                  <div
                    // key={index}
                    className={toggleActiveStyles(index)}
                    onClick={() => {
                      toggleActive(index);
                      setDay(
                        day.map(() => {
                          return `${element}`;
                        })
                      );
                    }}
                  >
                      <p className="date"> {element} </p>
                  </div>                
                   
                  ))}
                  {/* <h1>555</h1>
                  <h1>555</h1> */}
                </Carousel>
              </div>
              <div className="sd">
                <p>Select time</p>
                <div className="line-s"></div>
              </div>
              <div className="clock">
              
                <Carousel breakPoints={breakPoint} pagination={false}>
                  {/* {item.time.map((i, q) => ( */}
                    {showtime.map((element,index) => (
                  <div
                    // key={index}
                    className={toggleActiveStyles_2(index)}
                    onClick={() => {
                      toggleActive_2(index);
                      setTime(
                        time.map(() => {
                          return `${element}`;
                        })
                      );
                    }}
                  >
                      <p className="date"> {element} </p>
                  </div>                
                   
                  ))}
                </Carousel>
              </div>
              
            </div>
          </div>
        ))}
      {`${time}` != 0 ? (x = true) : (x = false)}
      {`${day}` != 0 ? (y = true) : (y = false)}
     
      {x != true
        ? (check = false)
        : x == y
        ? 
          (check1 = true)
        : null}
         <h1 className="txt1"> Select Seat</h1>
        <div className="line"></div>
      {check1 ? <SelectSeat data={data} tm={time} da={day} /> : null}
    </div>
  );
}

export default SelectedTime;
