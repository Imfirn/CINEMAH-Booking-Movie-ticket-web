import React, { useEffect, useState } from "react";
import Grid from "../../Grid/Grid";
import "./Movie.css";
// import SearchBar from '../../Search/Search.js';
// import { useMovieFench } from '../../Hook/useMovieFench';
import axios from "axios";
function Movie() {
  //   const { searchTerm, setSearchTerm } = useMovieFench();
  const [sortState, setSortState] = useState("");
  const [nameMovie, setNameMovie] = useState(null); 
  const timeout = async (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };

  const pushData = async (data) => {
    let formField = new FormData();
    formField.append("search", data);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/Search/",
      data: formField,
    }).then((response) => {});
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/Detail/`).then((res) => {
      setNameMovie(res.data);
    });
  }, []);
  if (!nameMovie) return "error";
  return (
    <div className={"home__hero-section darkBg"}>
      <div className="Wrap-mov">
        <div className="Wrap-type">
          <div className="Wrap-serach">
            <input
              className="ser"
              id="outlined-basic"
              label="Search"
              placeholder="Enter Movie name"
              variant="outlined"
              onChange={async (e) => {
                pushData(e.target.value);
                await timeout(100);
                if (e.target.value == "") {
                  axios.get("http://127.0.0.1:8000/api/Detail/").then((res) => {
                    setNameMovie(res.data);
                  });
                } else {
                  axios
                    .get("http://127.0.0.1:8000/api/NameSearch/")
                    .then((res) => {
                      setNameMovie(res.data);
                    });
                }
              }}
            />
          </div>
          <div className="select-type">
            <label htmlFor="movie-sort">Sorted By</label>
            <select
              onChange={(e) => {
                const selectedSort = e.target.value;
                setSortState(selectedSort);
                if (selectedSort == "MovieLH") {
                  axios
                    .get("http://127.0.0.1:8000/api/MovieLH/")
                    .then((res) => {
                      setNameMovie(res.data);
                    });
                }else if(selectedSort == "MovieHL"){
                  axios
                  .get("http://127.0.0.1:8000/api/MovieHL/")
                  .then((res) => {
                    setNameMovie(res.data);
                  });

                }
              }}
            >
              <option value="MovieLH">Low to High </option>
              <option value="MovieHL">High to Low </option>
            </select>
            {sortState}
          </div>
        </div>
        <div className="allMovie">
          {nameMovie &&
            nameMovie.map((item, index) => (
              <div key={index}>
                <Grid
                  name={item.Name}
                  img={`/image/nowPic/Movie/${item.Name}/${item.Date}_1.jpg`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
