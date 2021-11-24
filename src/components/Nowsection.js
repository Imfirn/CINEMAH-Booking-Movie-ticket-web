import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import './Nowsection.css'
import img1 from "./../assets/nowPic/n1.jpg"
import Movieimg from"./movieData"
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
                <Card number={Movieimg.nowShowing_1.nm} img={Movieimg.nowShowing_1.img} />
                <Card number={Movieimg.nowShowing_2.nm} img={Movieimg.nowShowing_2.img}/>
                <Card number={Movieimg.nowShowing_3.nm} img={Movieimg.nowShowing_3.img}/>
                <Card number={Movieimg.nowShowing_4.nm} img={Movieimg.nowShowing_4.img}/>
                <Card number={Movieimg.nowShowing_5.nm} img={Movieimg.nowShowing_5.img}/>
                <Card number={Movieimg.nowShowing_6.nm} img={Movieimg.nowShowing_6.img}/>
                <Card number={Movieimg.nowShowing_7.nm} img={Movieimg.nowShowing_7.img}/>
                <Card number={Movieimg.nowShowing_8.nm} img={Movieimg.nowShowing_8.img}/>
                <Card number={Movieimg.nowShowing_9.nm} img={Movieimg.nowShowing_9.img}/>
                <Card number={Movieimg.nowShowing_10.nm} img={Movieimg.nowShowing_10.img}/>
                <Card number={Movieimg.nowShowing_11.nm} img={Movieimg.nowShowing_11.img}/>
                <Card number={Movieimg.nowShowing_12.nm} img={Movieimg.nowShowing_12.img}/>
                
            </Carousel>  
            </div>
            <div className='nextMov'>
            <div className='curr'>
            <h1 className='txt1'>Coming Soon</h1>
            <Carousel breakPoints={breakPoint} pagination={false}>
                <Card number="1"/>
                <Card number="2"/>
                <Card number="3"/>
                <Card number="4"/>
                <Card number="5"/>
                <Card number="6"/>
                <Card number="5"/>
                <Card number="6"/>
                <Card number="5"/>
                <Card number="6"/>
            </Carousel>  
            </div>
            </div>
        </div>
    )
}

export default Nowsection
