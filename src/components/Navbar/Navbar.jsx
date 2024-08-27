import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icons from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import {logout } from '../../Firebase'



const Navbar = () => {

const navRaf = useRef();

useEffect(()=>{
  window.addEventListener('scroll',()=>{
 
    if(window.scrollY >= 80){
      navRaf.current.classList.add('nav-dark')
    }else{
      navRaf.current.classList.remove('nav-dark')
    }
  })
},[])


  return (
    <div ref={navRaf} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Populer</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt=""  className='icons' />
        <p>Children</p>
        <img src={bell_icons} alt=""  className='icons' />
        <idv className="navbar-profile">
        <img src={profile_img} alt=""  className='profile' />
        <img src={caret_icon} alt=""   />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sing Out of Netflix</p>
        </div>
        </idv>
      </div>
    </div>
  )
}

export default Navbar