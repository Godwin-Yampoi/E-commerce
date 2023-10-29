import React from 'react'
import { useState } from 'react';
import logo from './Assets/logo.png';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu, setMenu] = useState('shop')
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='logo'></img>

        </div>

        <ul className='nav-menu'>
                <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none', color:'black'}}to= '/'>Shop</Link>{menu==="shop"? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("mens")}}><Link  style={{textDecoration: 'none', color:'black'}}to= 'mens'>Men</Link>{menu==="mens"? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("womens")}}><Link  style={{textDecoration: 'none', color:'black'}}to= 'womens'>Women</Link>{menu==="womens"? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link  style={{textDecoration: 'none', color:'black'}}to= 'kids'>Kids</Link>{menu==="kids" ? <hr/> : <></>}</li>
            </ul>
       <div className='nav-login-cart'>
       <Link to= 'login'><button>Login</button></Link>
       <Link  style={{color:'black'}} to= 'cart'><ShoppingCartIcon /></Link> 
        <div className='nav-cart-count'>0</div>
       </div>
    </div>
  )
}

export default Navbar
