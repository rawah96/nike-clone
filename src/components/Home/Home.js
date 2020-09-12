import React from 'react'
import './Home.css'
import nike from './nike.jpg'

function Home() {
    return (
        <div className="home">
            <img src={nike} alt="" />
            <h1>ROCK THESE ON REPEAT</h1>
            <h6>Express you style with everyday layers and more.</h6>
            <button className="shop-btn">Shop</button>
        </div>
    )
}

export default Home
