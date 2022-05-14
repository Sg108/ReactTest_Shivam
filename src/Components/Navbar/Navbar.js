import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.png'
import fish from '../../Images/fish.png'
const Navbar = () => {
  return (
    <div className='container'>
        <div className="navbar">
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <div className='navitem'>
                    <a href="" className='link'>Categories</a>
                </div>
                <div className='navitem'>
                    <a href="" className='link'>FAQs</a>
                </div>
                <div className='navitem'>
                    <a href="" className='link'>My Cart</a>
                </div>
                <div className='navitem'>
                    <button className='login'>Login</button>
                    </div>
            </div>
        </div>
        <div className='fish-image'>
            <img src={fish} alt="fish"/>
        </div>
    </div>
  )
}

export default Navbar