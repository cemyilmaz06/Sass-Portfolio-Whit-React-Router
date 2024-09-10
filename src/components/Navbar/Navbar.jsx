import React from 'react'
import "./Navbar.scss"
import {  NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="nav">
            <ul className="nav__list">
                <li class="nav__item">
                    <NavLink to="/" className="nav__link "style={({isActive})=>({color: isActive && "salmon"})} >Home</NavLink>
                </li>
                <li class="nav__item">
                    <NavLink to="/about" className="nav__link" style={({isActive})=>({color: isActive && "salmon"})} >About</NavLink>
                </li>
                <li class="nav__item">
                    <NavLink to="/projects" className="nav__link" style={({isActive})=>({color: isActive && "salmon"})} >My Project</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/contact" className="nav__link" style={({isActive})=>({color: isActive && "salmon"})} >Contact</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar