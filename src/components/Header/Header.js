import React, {useState} from 'react'
import './Header.css'
import converse from '../../converse.svg'
import jordan from '../../jordan.png'
import nike from '../../nike.svg'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Link} from 'react-router-dom';

function Header() {
    const [input, setInput] = useState('');

    return (
        <div className="header">
            <div className="top-header">
                <div className="top-left">
                    <div className="jordans">
                        <img  src={jordan} alt=""/>
                    </div>
                    <div className="converse">
                        <img src={converse} alt="" />
                    </div>
                </div>
                <div className="top-right">
                    {/* 
                        Help | Join Us | Sign In
                    */}
                    <h5>Help</h5>
                    <hr />
                    <h5>Join Us</h5>
                    <hr />
                    <h5>Sign In</h5>

                </div>
            </div>

            <div className="bottom-header">
                <div className="bottom-left">
                    <Link to="/">
                        <img src={nike} alt="" />
                    </Link>
                </div>
                <div className="bottom-middle">
                    {/* nav/router */}
                    <Link to="/newReleases">
                        <h3>New Releases</h3>                        
                    </Link>
                    <Link to="men">
                        <h3>Men</h3>
                    </Link>
                    <Link to="women">
                        <h3>Women</h3>
                    </Link>
                    <Link to="kids">
                        <h3>Kids</h3>
                    </Link>
                </div>
                <div className="bottom-right">
                    {/* search - heart - cart */}
                    <div className="search">
                        <SearchOutlinedIcon />
                        {/* <h3 className="search-h3">Search</h3> */}
                        <input type='text'
                        placeholder="Search"
                        onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    
                    <FavoriteBorderIcon />
                    <ShopOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Header
