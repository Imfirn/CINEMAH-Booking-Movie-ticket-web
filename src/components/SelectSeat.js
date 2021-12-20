import"./SelectSeat.css";
import React, { useState } from "react";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { Button } from "./Button";
import { Link } from "react-router-dom";
const seats = Array.from({ length: 8 * 8 }, (_, i) => i + 1);
// main
export default function SelectSeat({ data,tm,da }) {
  const { id} = useParams(); 
  const [selectedSeats, setSelectedSeats] = useState([]);
  var price =selectedSeats.length*250;
  return (
    
    <div className="Buy-ticket">
        
      <div className="main">
      {data
            .filter((item) => item.Name == id)
            .map((item, index) => (
                <div className="data-wrap">
              <div className="seat-wrap">
                {/* Select-Seat */}
                <Cinema
                  movie={item}
                  selectedSeats={selectedSeats}
                  onSelectedSeatsChange={(selectedSeats) =>
                    setSelectedSeats(selectedSeats)
                  }
                />
               
              </div>
              <ul>
                <li className="detail_1">{item.Name}</li>
                <li className="detail_1">
                  {/* {item.time
                    .filter((i) => i == tm)
                    .map((i) => (
                      <li>{i}</li>
                    ))}
                  {item.day
                    .filter((i) => i == da)
                    .map((i) => (
                      <li>{i}</li>
                    ))} */}
                </li>
                <li className="detail_1">
                  {/* {selectedSeats.length<=5 ? null:"you"} */}
                  selected seat
                  <div className="row">
                    {selectedSeats.map((i) => (
                      <p className="info-seat">
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
                      </p>
                    ))}
                  </div>
                </li>
                <li className="detail">
                  <p>total</p>
                  {price}Baht
                </li>
              </ul>
            </div>



            ))}        
        
      </div>
      <ShowCase />
      <div className="btn-con" >
      {selectedSeats.length!=0 ? <Link to={`/purchase/${id}/${tm}/${da}/${price}`} className="btn">
      <Button buttonStyle="btn--ticket">continuous</Button>
      </Link>:null}
      
      </div>
    </div>
  );
}
///sub-set

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat show" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }
  

  return (
    <div className="Cinema">
      <div className="screen" />
      <div className="wrap">
        <div className="A_H">
          <div className="al">H</div>
          <div className="al">G</div>
          <div className="al">F</div>
          <div className="al">E</div>
          <div className="al">D</div>
          <div className="al">C</div>
          <div className="al">B</div>
          <div className="al">A</div>
        </div>

        <div className="seats">
          {seats.map((seat) => {
            const isSelected = selectedSeats.includes(seat);
            const isOccupied = null;
            return (
              
              <div>                             
                <span
                  tabIndex="0"
                  key={seat}
                  className={clsx(
                    "seat",
                    isSelected && "selected",
                    isOccupied && "occupied"
                  )}
                  onClick={
                    selectedSeats.length <= 5
                      ? isOccupied
                        ? null
                        : () => handleSelectedState(seat)
                      : (isSelected
                      ? () => handleSelectedState(seat)
                      : null)
                  }
                  
                  onKeyPress={
                    isOccupied
                      ? null
                      : (e) => {
                          if (e.key === "Enter") {
                            handleSelectedState(seat);
                          }
                        }
                  }
                />
                
              </div>
            );
          })}
        </div>
        <div className="A_H">
          <div className="al">H</div>
          <div className="al">G</div>
          <div className="al">F</div>
          <div className="al">E</div>
          <div className="al">D</div>
          <div className="al">C</div>
          <div className="al">B</div>
          <div className="al">A</div>
        </div>
      </div>
    </div>
  );
}
