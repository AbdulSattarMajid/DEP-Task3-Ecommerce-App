import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Searchedthings from './components/searchedthings';
import Home from './components/Home';
import Products from './components/Product';
import Support from './components/Support';
import Deals from './components/Deals';
import About from './components/About';
import Notification from './components/Notification';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);
  const [searchvalue, setSearchValue] = useState('');


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addToCart = (product) => {
    console.log("Hello")
    setCartItems([...cartItems, product]);
    setNotification("One item added to the cart!");
    setTimeout(() => {
      setNotification(null);
    }, 600);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product !== productToRemove));
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  const confirm = (test) => {
    console.log(test)
    if (test === false) {
      alert("you need to login first")
      window.location.href = 'http://localhost:3000/login'
      setCartItems(cartItems.filter(product => product === 'abc'));
    } else {
      setCartItems(cartItems.filter(product => product ==='as' ));
      alert('order confirmed')
    }
  }
  return (
    <>
      <div className="app">
        <Navbar toggleModal={toggleModal} searchvalue={searchvalue} setSearchValue={setSearchValue}/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home isModalOpen={isModalOpen} toggleModal={toggleModal} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />} />

            <Route path='/shop' element={<Products isModalOpen={isModalOpen} toggleModal={toggleModal} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} confirmation={confirm} />} />

            <Route path='/deals' element={<Deals isModalOpen={isModalOpen} toggleModal={toggleModal} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} confirmation={confirm} />} />

            <Route path='/help' element={<Support isModalOpen={isModalOpen} toggleModal={toggleModal} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />} />

            <Route path='/about' element={<About isModalOpen={isModalOpen} toggleModal={toggleModal} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />} />

            <Route path='/searchedthings' element={ <Searchedthings searchvalue={searchvalue}  />
}/>
          </Routes>
        </BrowserRouter>
        {notification && (
          <Notification message={notification} onClose={handleCloseNotification} />
        )}
      </div>
    </>
  );
}

export default App;
