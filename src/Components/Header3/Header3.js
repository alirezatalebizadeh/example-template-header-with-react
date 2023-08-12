import React from 'react'
import './Header3.css'
export default function Header3() {
    return (
        <div className="header3">
            <div className="nav">
                <div className="nav__left">
                    <h1 className="logo">M<span className="colored__text">O</span>TOR</h1>
                </div>
                <div className="nav__right">
                    <ul className="navBar_Links">
                        <li className="link">Home</li>
                        <li className="link">Buy</li>
                        <li className="link">Product</li>
                        <li className="link login">Login</li>
                    </ul>
                </div>
            </div>
            <div className="img__text">
                <div className="text">
                    <h1 className='big__text'>
                        N<span className='colored__text'>e</span>ed
                        <span className='colored__text'>F</span>or Spee
                        <span className='colored__text'>d</span>
                    </h1>
                </div>
                <img src="./images/result (1).png" className="img" alt="" />
            </div>
            <div className="media">
                <div className="media__link">
                    <i className="fa fa-facebook-square"></i>
                    <span className='media_text'>Facebook</span>
                </div>
                <div className="media__link">
                    <i className="fa fa-instagram"></i>
                    <span className='media_text'>Instagram</span>
                </div>
                <div className="media__link">
                    <i className="fa fa-twitter-square"></i>
                    <span className='media_text'>twitter</span>
                </div>
            </div>
        </div>
    )
}
