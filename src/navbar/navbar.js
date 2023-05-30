import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src="https://cdn-icons-png.flaticon.com/512/1506/1506254.png" className='logo'/>
        <h1 className='brandName'>Imagine World</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-cart">
      <span className="cart-count">3</span>
        <FaShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;