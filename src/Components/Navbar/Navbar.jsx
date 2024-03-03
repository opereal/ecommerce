import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import cart from '../Assets/cart.png'
import logo from '../Assets/logo.png'


 const Navbar = () => {
  const [menu,setMenu] = useState("Shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>SHOPPER</p>

        
        </div>
        <ul className="nav-menu">
<li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
<li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}  to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
<li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li> 
<li onClick={()=>{setMenu("kid")}}><Link style={{textDecoration:'none'}}  to='/kid'>Kid</Link>{menu==="kid"?<hr/>:<></>}</li>       
</ul>

<div className="nav-login-cart">
    <Link to='/login'><button>Login</button></Link>
    <Link to='/cart'><img src={cart} alt=""/></Link>
    <div className="nav-cart-count">0</div>
</div>

    </div>
  )
}


export default Navbar
