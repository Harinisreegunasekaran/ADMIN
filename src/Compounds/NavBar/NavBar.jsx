import React from 'react'
import './NavBar.css'
import navlogo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.png'
const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo' />
        <img src={navProfile} alt="" className='nav-profile' />
    </div>
  )
}

export default NavBar