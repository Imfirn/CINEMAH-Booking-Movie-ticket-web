import React,{useEffect,useState} from 'react';
import Grid from '../../Grid/Grid'
import "./Movie.css"
// import SearchBar from '../../Search/Search.js';
import { useMovieFench } from '../../Hook/useMovieFench';
import axios from "axios";
function Movie() {
//   const { setSearchTerm } = useMovieFench(); 
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
    return(
        <div className={"home__hero-section darkBg"}>
        <div className="Wrap-mov">
        <div className="allMovie">
            {/* <SearchBar setSearchTerm={setSearchTerm} /> */}
           
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
    )
}

export default Movie