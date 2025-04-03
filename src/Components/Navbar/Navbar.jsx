import React, { useState } from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"

const Navbar = () => {
  const [menu,setMenu]=useState("Shop")
  return (
    <div className='navbar'>
      <div className="navbar-logo">
      <img src={logo} alt="" className='navbar-logo'/>
      <p>SHOPPER</p>
      </div>
      <ul className="navbar-list">
        <li onClick={()=>setMenu("shop")}><Link to="/">Shop{menu==="shop"?<hr/>:<></>}</Link></li>
        <li onClick={()=>setMenu("mens")}><Link to="/mens">Mens{menu==="mens"?<hr/>:<></>}</Link></li>
        <li onClick={()=>setMenu("womens")}><Link to="/womens">Womens{menu==="womens"?<hr/>:<></>}</Link></li>
        <li onClick={()=>setMenu("kids")}><Link to="/kids">Kids{menu==="kids"?<hr/>:<></>}</Link></li>

      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar