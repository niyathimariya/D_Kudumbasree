import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
    <div className='Navbar-right'>
    <img className='logo' src='../images/Kudumbasree-logo.jpg'/>
    <h3>D_Kudumbashree</h3>
    </div>
    <div className='Navbar-left'>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
    </div>
    </div>
    </>
  )
}

export default Navbar
