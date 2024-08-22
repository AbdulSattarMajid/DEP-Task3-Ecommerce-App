import React from 'react';
import background from '../Images/back.avif';
import laptop from '../Images/macbook.jpg';
import playstation from '../Images/playstation.jpg';
import watch from '../Images/watch.jpg';
import customer1 from '../Images/customer1.jpg'
import customer2 from '../Images/customer2.jpg'
import customer3 from '../Images/customer3.jpg'

import '../App.css';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

function Home({ toggleModal, isModalOpen, cartItems, removeFromCart }) {
    const navigate = useNavigate();

    const checkout = () => {
        navigate('/shop');
    };

    const gotoDeals = () => {
        navigate('/deals');
    };

    return (
        <div className='Home'>
            <div className="background">
                <img className='home-image' src={background} alt="Background" />
                <div className="text">
                    <h1>Welcome to Tech Heaven</h1>
                    <p>Your one-stop shop for the latest laptops, games, software, and smartphones!</p>
                    <button onClick={checkout} className="checkout-button">Check Out Yourself</button>
                </div>
            </div>

            {isModalOpen && (
                <>
                    <div className="modal-overlay"></div>
                    <div className="modal-content">
                        <h1>This is a modal</h1>
                        <p>The content behind is not interactive, and scrolling is disabled.</p>
                        <button onClick={() => toggleModal()}>Close</button>
                    </div>
                </>
            )}

            <div className="home-in-demand">
                <h1>Most in Demand Right Now</h1>
                <div className="items-row">
                    <div className="item">
                        <h2>Apple Macbook Air M2</h2>
                        <div className="img-for-item">
                            <img src={laptop} alt="Apple Macbook Air M2" />
                        </div>
                        <h4>Price: $1299</h4>
                        <button onClick={checkout} className="order-button">Order Now</button>
                    </div>
                    <div className="item">
                        <h2>Rolex Submariner</h2>
                        <div className="img-for-item">
                            <img src={watch} alt="Rolex Submariner" />
                        </div>
                        <h4>Price: $9800</h4>
                        <button onClick={checkout} className="order-button">Order Now</button>
                    </div>
                    <div className="item">
                        <h2>Playstation 5</h2>
                        <div className="img-for-item">
                            <img src={playstation} alt="Playstation 5" />
                        </div>
                        <h4>Price: $449</h4>
                        <button onClick={checkout} className="order-button">Order Now</button>
                    </div>
                </div>
            </div>

            <div className="discount">
                <h1>⚡️🔥 BIGGEST SALE OF THE YEAR 🔥⚡️</h1>
                <p>🚀 **LIMITED TIME OFFER** 🚀</p>
                <p>Get up to **50% OFF** on select tech items! Whether you're eyeing the latest **laptops**, craving **top-notch games**, or need cutting-edge **smartphones**, now's your chance to save big! 💥💻📱🎮</p>
                <p>**Hurry!** This offer is valid until the end of the week. Don’t miss out on the tech deals you’ve been waiting for! ⏳💸</p>
                <button onClick={gotoDeals} className="explore-button">Explore Discounts</button>
            </div>

            <div className="satisfied-customers">
                <h1>🌟 Satisfied Customers 🌟</h1>
                <div className="customer-testimonials">
                    <div className="testimonial">
                        <div className="customer-image">
                            <img src={customer1} alt="Customer 1" />
                        </div>
                        <div className="review">
                            <p>"**Tech Heaven** provided me with an amazing **laptop** at a fantastic price. The service was excellent, and I couldn’t be happier!" - Lionel Messi</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="customer-image">
                            <img src={customer2} alt="Customer 2" />
                        </div>
                        <div className="review">
                            <p>"**The best place** to get all your tech needs. From **smartphones** to **software**, they have it all with unbeatable prices." - Cristiano Ronaldo</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="customer-image">
                            <img src={customer3} alt="Customer 3" />
                        </div>
                        <div className="review">
                            <p>"**Fantastic service** and **great products**. I always find what I need at Tech Heaven, and the discounts are unbeatable!" - Kevin De Bruyne</p>
                        </div>
                    </div>
                </div>
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
                                <button onClick={toggleModal} className="confirm-button">Confirm</button>
                            </ul>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Home;
