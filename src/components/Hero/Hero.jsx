import React, { useState } from "react";
import "./Hero.scss";
import HeroImg from '../../images/illustration-intro.svg'
import Logo from '../../images/logo.svg'
import  Hamburger from '../../images/icon-hamburger.svg'
import  Close from '../../images/icon-close.svg'

const Hero = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <div className="hero">

<nav className='navbar'>
        <img src={Logo} alt="logo" className='logo' />

        <ul className={showMenu ? 'show' : ''}>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
        </ul>
        <button className="primaryBtn">Get Started</button>
        {
          showMenu ?
          <img  src={Close} alt="hamburger" className="menuIcon Close" onClick={toggleMenu} />
          :
          <img  src={Hamburger} alt="hamburger" className="menuIcon "  onClick={toggleMenu}/>
        }

    </nav>
         <section className="heroContainer">
      <div className="left">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <button className="primaryBtn">Get Started</button>
      </div>

      <div className="right">
        <img src={HeroImg} alt="heri-Img" />
      </div>
    </section>
    </div>
   
  );
};

export default Hero;
