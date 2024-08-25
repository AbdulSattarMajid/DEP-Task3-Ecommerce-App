import React, { useState, useEffect } from "react";
import Footer from "./footer";
import image1 from '../Images/images.jpg'
import '../App.css';

function Deals({ isModalOpen, toggleModal, cartItems, removeFromCart, addToCart, confirmation }) {
    const [login, setLogin] = useState(false);
    const deals = [
        { id: 208, model: "Acer Swift Edge 16", originalPrice: "$1499", dealPrice: "$999", image: image1 },
        { id: 209, model: "LG Gram SuperSlim", originalPrice: "$1299", dealPrice: "$899", image: image1 },
        { id: 210, model: "MSI Creator Z17 HX Studio", originalPrice: "$2799", dealPrice: "$1399", image: image1 },
        { id: 301, model: "PlayStation 5 Pro", originalPrice: "$599", dealPrice: "$449", image: image1 },
        { id: 302, model: "Xbox Series X (2TB)", originalPrice: "$599", dealPrice: "$449", image: image1 },
        { id: 303, model: "Nintendo Switch 2", originalPrice: "$399", dealPrice: "$299", image: image1 },
        { id: 401, model: "Apple Watch Series 9", originalPrice: "$399", dealPrice: "$299", image: image1 },
        { id: 402, model: "Samsung Galaxy Watch 6 Pro", originalPrice: "$399", dealPrice: "$299", image: image1 },
        { id: 403, model: "Google Pixel Watch 2", originalPrice: "$349", dealPrice: "$249", image: image1 },
        { id: 501, model: "NVIDIA GeForce RTX 4090 Ti", originalPrice: "$1999", dealPrice: "$1499", image: image1 },
        { id: 502, model: "AMD Ryzen 9 7950X3D", originalPrice: "$699", dealPrice: "$499", image: image1 },
        { id: 503, model: "Corsair Dominator Platinum RGB DDR5 64GB", originalPrice: "$399", dealPrice: "$299", image: image1 }
    ];
    
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
        }
    };
    
    return (
        <div className="deals-page">
            <div className="deals-header">
                <h1>🔥 Exclusive Tech Deals 🔥</h1>
                <p>Grab these amazing deals before they're gone!</p>
            </div>
            <div className="deals-items">
                {deals.map((deal) => (
                    <div className="deal-item" key={deal.id}>
                        <h2>{deal.model}</h2>
                        <div className="img-for-deal-item">
                            <img src={deal.image} />
                        </div>
                        <h4>Original Price: {deal.originalPrice}</h4>
                        <h4>Deal Price: {deal.dealPrice}</h4>
                        <button onClick={() => addToCart(deal)} className="order-button-deals">+</button>
                    </div>
                ))}
            </div>
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
            <Footer />
        </div>
    );
}

export default Deals;
