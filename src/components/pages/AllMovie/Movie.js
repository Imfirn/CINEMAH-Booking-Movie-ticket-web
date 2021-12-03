import React from 'react'
import Grid from '../../Grid/Grid'
import MovieimgNow from '../../movieDataNow'
import "./Movie.css"
function Movie() {
    return(
        <div className={"home__hero-section darkBg"}>
        <div className="Wrap-mov">
        <div className="allMovie">
            {/* <SearchBar setSearchTerm={setSearchTerm} /> */}
           
            {MovieimgNow &&
            MovieimgNow.map((item, index) => (
              <div key={index}>
                 <Grid 
                    name={item.nm}
                    img={item.img}
                 />               
                
              </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Movie