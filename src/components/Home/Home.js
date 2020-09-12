import React from 'react'
import './Home.css'
import nike from './nike.jpg'
import {Link} from 'react-router-dom';
import Product from './Product'
import delta from './jordan-delta.jpg'
import airforce from './airforce.jpg'
import air2090 from './max2090.jpg'

function Home() {
    return (
        <>
        <div className="home">
            <div className="home-top">
                <img src={nike} alt="" />
                <h1>ROCK THESE ON REPEAT</h1>
                <h6>Express you style with everyday layers and more.</h6>
                <button className="shop-btn">Shop</button>
            </div>
            <div className="home-middle">
                <h2>This Season's Must-Haves</h2>
                <h4>Shop All</h4>
            </div>
        </div>
        <div className="products">
        <Product image={delta} title="Jordan Delta" type="Women's Shoe" price={130}/>
        <Product image={airforce} title="Nike Air Force 1 '07 Craft" type="Men's Shoe" price={120}/>
        <Product image={air2090} title="Nike Air Max 2090" type="Women's Shoe" price={150}/>
        </div>
        </>
    )
}

export default Home
