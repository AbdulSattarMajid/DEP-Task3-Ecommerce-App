import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import images from '../Images/logo.png';
import '../App.css';

const Navbar = ({ searchvalue, setSearchValue ,toggleModal}) => {
  function searching() {
    console.log(searchvalue);
    window.location.href='/Searchedthings'
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={images} alt="" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/deals">Deals</a></li>
        <li><a href="/help">Help & Support</a></li>
        <li><a href="/about">About us</a></li>
        <li>
          <input 
            type="text" 
            placeholder="Search here" 
            value={searchvalue} 
            onChange={(e) => setSearchValue(e.target.value)} 
          />
        </li>
        <li>
          <button onClick={searching} className="btn1">
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </li>
      </ul>
      <div className="cart-icon">
        <a href="#" onClick={toggleModal}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
