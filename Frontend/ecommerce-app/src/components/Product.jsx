import React, { useState, useEffect } from "react";
import categories from "./categories"; 
import playstation from '../Images/mobile8.jpg';
import '../App.css';
import Footer from "./footer";

function Products({ isModalOpen, toggleModal, addToCart, cartItems, removeFromCart, confirmation }) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setLogin(storedLoginStatus);
    
  }, []);

  const logincheck = () => {
    if (!login) {
      confirmation(login);
      setLogin(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      confirmation(login);
      localStorage.removeItem('isLoggedIn')    }
  };

  return (
    <div className="product-page">
      <div className="categories-of-products">
        <div className="category1"><a href="#item0">Smart Phones</a></div>
        <div className="category2"><a href="#item1">Laptops</a></div>
        <div className="category3"><a href="#item2">Gaming Consoles</a></div>
        <div className="category4"><a href="#item3">SmartWatches</a></div>
        <div className="category5"><a href="#item4">Components & Peripherals</a></div>
        <div className="category6"><a href="#item5">Headphones</a></div>
        <div className="category7"><a href="#item6">Cameras</a></div>
        <div className="category8"><a href="#item7">Printers & Scanners</a></div>
        <div className="category9"><a href="#item8">Monitors</a></div>
        <div className="category10"><a href="#item9">Speakers</a></div>
      </div>
      {categories.map((category, index) => (
        <div key={category.id} id={`item${index}`} className="category">
          <h2>{category.name}</h2>
          <div className="products">
            {category.products.map((product) => (
              <div key={product.id} className="product">
                <img src={playstation} alt={product.model} />
                <p>Model: {product.model}</p>
                <p>Price: {product.price}</p>
                <button onClick={() => addToCart(product)} className="add-button">+</button>
              </div>
            ))}
          </div>
        </div>
      ))}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={toggleModal} className="close-button">✕</button>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
              <>
                <p className="empty-cart-message">Your cart is currently empty.</p>
                <button onClick={toggleModal} className="empty-cart-close-button">Close</button>
              </>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div>
                      <img src={item.image} alt="" />
                      <div>
                        <p>{item.model}</p>
                        <p>{item.price}</p>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item)} className="remove-button">✕</button>
                  </li>
                ))}
                <button onClick={logincheck} className="confirm-button">Confirm</button>
              </ul>
            )}
          </div>
        </div>
      )}
      <div className="for-footer-in-products">
        <Footer />
      </div>
    </div>
  );
}

export default Products;
