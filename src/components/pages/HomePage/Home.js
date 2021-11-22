import React from 'react'
import Herosection from '../../Herosection'
import Nowsection from '../../Nowsection'

// import{homeObjOne}from'./Data'

function Home() {
    return (
        <> 
        < div className={'home__hero-section darkBg'}>  
        <Herosection/> 
        <Nowsection/>  
        </div>   
        </>
    )
}

export default Home
