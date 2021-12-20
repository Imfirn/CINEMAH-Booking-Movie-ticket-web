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

function SelectedTime({ data }) {
  const { id } = useParams();
  var x,
    y,
    check,
    check1 = false;
  const [day, setDay] = useState([null]);
  const [time, setTime] = useState([null]);
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const [appState, changeState] = useState({
    ActiveObject: null,
    object: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  });
  const [appState_2, changeState_2] = useState({
    ActiveObject: null,
    object: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
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
      {data
        .filter((item) => item.Name == id)
        .map((item, index) => (
          <div className="selected">
            <div className="wrap-date">
              <div className="day">
                <Carousel breakPoints={breakPoint} pagination={false}>
                  {/* {item.day.map((j, k) => ( */}
                  <div
                    key={2}
                    className={toggleActiveStyles(2)}
                    onClick={() => {
                      toggleActive(2);
                      setDay(
                        day.map(() => {
                          return `${item.Name}`;
                        })
                      );
                    }}
                  >
                    <p className="date"> {item.Name} </p>
                  </div>
                  <h1>555</h1>
                  <h1>555</h1>
                </Carousel>
              </div>
              <div className="clock">
            <Carousel breakPoints={breakPoint} pagination={false}>
              {/* {item.time.map((i, q) => ( */}
                <div>
                
                  <div
                    key={2}
                    className={toggleActiveStyles_2(2)}
                    onClick={() => {
                      toggleActive_2(2);
                      setTime(
                        time.map(() => {
                          return `${item.Name}`;
                        })
                      );
                    }}
                  >
                    {" "}
                    <p className="date"> {item.Name} </p>
                  </div>
                  {/* </Link> */}
                </div>
             <>testt</>
             <>testt</>

            </Carousel>
            </div>                  




            </div>
          </div>
        ))}
        {`${time}` != 0 ? (x = true) : (x = false)}
        {`${day}` != 0 ? (y = true) : (y = false)}
       <h1> {`${time}` != 0 ? "(x = true)" : "(x = false)"}</h1>
       <h1> {`${day}` != 0 ? "(y = true)" : "(y = false)"}</h1>
       {x != true ? (
        (check = false)
      ) : x == y ? (
        // <Link to={`/ticket/${id}/${time}/${day}`} className="btn">
          // <Button buttonStyle="btn--ticket" onClick={check1=true} >continuous</Button>
        check1=true
      ) : null}
      {check1 ? <SelectSeat data={data} tm={time} da={day}/>:null}
    </div>
  );
}

export default SelectedTime;
