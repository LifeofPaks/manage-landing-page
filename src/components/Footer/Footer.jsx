import React from 'react'
import './Footer.scss'
import Logo from '../../images/logo.svg'
import Facebook from '../../images/icon-facebook.svg'
import Youtube from '../../images/icon-youtube.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'

const Footer = () => {
  return (
    <section className='footer'>
            <p className='cpMobile'>  Copyright 2020. All Rights Reserved</p>
        <div className="col1">
            <img src={Logo} alt="logo" className='logo'/>
            <div className="socials">
                <img src={Facebook} alt="social-icon" />
                <img src={Youtube} alt="social-icon" />
                <img src={Twitter} alt="social-icon" />
                <img src={Pinterest} alt="social-icon" />
                <img src={Instagram} alt="social-icon" />
            </div>
        </div>

        <div className="listWrapper">
        <ul className="col2">
            <li>Home</li>
            <li>Pricing</li>
            <li>Product</li>
                <li>About Us</li>
            </ul>

            <ul className="col2">
                <li>Careers</li>
                <li>Community</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      
        <div className="col1">
            <div className="inputWrapper">
                <input type="text" placeholder='Updates in your inbox...' />
                <button>Go</button>
            </div>
            <p className='cp'>  Copyright 2020. All Rights Reserved</p>
        </div>

    </section>
  )
}

export default Footer