import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import './Nowsection.css'
// import img1 from "./../assets/nowPic/n1.jpg"
import MovieimgNow from"./movieDataNow"
// import imgsrc  from  './movieData'
// import name from'./movieData'
// import 
function Nowsection() {
    const breakPoint=[
        {width:400 , itemsToShow : 1},
        {width:450 , itemsToShow : 2},     
        {width:600 , itemsToShow : 3},
        {width:800 , itemsToShow : 4},       
        {width:1200 , itemsToShow : 5},
        {width:1500 , itemsToShow : 6},
    ]
    return (
        <div className={'home__hero-section darkBg'}>
        <div className='curr'>
            <h1 className='txt1'>Now Showing</h1>
           
            <Carousel breakPoints={breakPoint} pagination={false}>
            {       MovieimgNow && MovieimgNow.map((item)=>         

                           <Card number={item.nm} img={item.img} time={item.time} btn='True'/> 
                        
                    )
                }
               
               
                
            </Carousel>  
            </div>
            <div className='nextMov'>
            <div className='curr'>
            <h1 className='txt1'>Coming Soon</h1>
            <Carousel breakPoints={breakPoint} pagination={false}>
            {       MovieimgNow && MovieimgNow.map((item)=>         

                    <Card number={item.nm} img={item.img} time={item.time}/> 

                        )
            }
            
            </Carousel>  
            </div>
            </div>
        </div>
    )
}

export default Nowsection
