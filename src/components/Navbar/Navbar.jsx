import React from 'react'
import './Navbar.scss'
import Logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={Logo} alt="logo" />
        <ul>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
        </ul>
        <button className="primaryBtn">Get Started</button>
    </nav>
  )
}

export default Navbar