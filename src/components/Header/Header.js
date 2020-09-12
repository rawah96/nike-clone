import React, {useState} from 'react'
import './Header.css'
import converse from '../../converse.svg'
import jordan from '../../jordan.png'
import nike from '../../nike.svg'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Link} from 'react-router-dom';
import { IconButton } from '@material-ui/core'

function Header() {
    const [input, setInput] = useState('');

    return (
        <div className="header">
            <div className="top-header">
                <div className="top-left">
                    <div className="jordans">
                        <Link to="/jordan">
                            <img  src={jordan} alt=""/>
                        </Link>
                    </div>
                    <div className="converse">
                        <Link to="/converse">
                            <img src={converse} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="top-right">
                    <Link to="/help">
                        <h5>Help</h5>
                    </Link>
                    <hr />
                    <Link to="join">
                        <h5>Join Us</h5>
                    </Link>
                    <hr />
                    <Link to="/login">
                        <h5>Sign In</h5>
                    </Link>

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
                        <h5>New Releases</h5>                        
                    </Link>
                    <Link to="/men">
                        <h5>Men</h5>
                    </Link>
                    <Link to="/women">
                        <h5>Women</h5>
                    </Link>
                    <Link to="/kids">
                        <h5>Kids</h5>
                    </Link>
                    <Link to="/customize">
                        <h5>Customize</h5>
                    </Link>
                    <Link to="/sale">
                        <h5>Sale</h5>
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
                    
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton>
                        <ShopOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="ads">Free Shipping & 60-Day Free Returns
            <Link to="/join">Join now</Link>

            </div>
        </div>
    )
}

export default Header
