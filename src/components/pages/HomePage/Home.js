import React from 'react'
import Herosection from '../../Herosection'
import{homeObjOne}from'./Data'
function Home() {
    return (
        <>
            <Herosection{...homeObjOne}/>
        </>
    )
}

export default Home
