import React from 'react'
import './Header.css'
import converse from '../../converse.svg'
import jordan from '../../jordan.png'
function Header() {
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
                    {/* nike logo */}
                </div>
                <div className="bottom-middle">
                    {/* nav/router */}
                </div>
                <div className="bottom-left">
                    {/* search - heart - cart */}
                </div>
            </div>
        </div>
    )
}

export default Header
