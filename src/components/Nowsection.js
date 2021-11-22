import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import './Nowsection.css'
function Nowsection() {
    const breakPoint=[
        {width:500 , itemsToShow : 1},
        {width:700 , itemsToShow : 3},
        {width:1200 , itemsToShow : 4},
        {width:1500 , itemsToShow : 5},
    ]
    return (
        <div className={'home__hero-section darkBg'}>
        <div className='curr'>
            <h1 className='txt1'>Now Showing</h1>
            <Carousel breakPoints={breakPoint} pagination={false}>
                <Card number="1"/>
                <Card number="2"/>
                <Card number="3"/>
                <Card number="4"/>
                <Card number="5"/>
                <Card number="6"/>
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
            </Carousel>  
            </div>
            </div>
        </div>
    )
}

export default Nowsection
