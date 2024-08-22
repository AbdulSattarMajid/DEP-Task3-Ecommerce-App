import React from 'react';
import '../App.css';
import companyLogo from '../Images/logo.png';

function AboutUs({ isModalOpen, toggleModal, cartItems, removeFromCart }) {
  return (
    <div className='about-us'>
      <div className='hero-section'>
        <img src={companyLogo} alt='Company Logo' className='company-logo' />
        <h1>About Us</h1>
        <p>
          At Tech Heaven, we are dedicated to providing the latest and greatest in technology. Our mission is to bring you the finest products and exceptional customer service, ensuring that your tech experience is nothing short of extraordinary.
        </p>
      </div>
      <div className='our-mission'>
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize the tech shopping experience. We strive to offer an extensive range of high-quality tech products, from cutting-edge laptops to state-of-the-art gaming consoles. We are committed to delivering value, innovation, and excellence in everything we do.
        </p>
      </div>
      <div className='our-history'>
        <h2>Our History</h2>
        <p>
          Founded in 2024, Tech Heaven started with a simple goal: to make high-quality technology accessible to everyone. Over the years, we have grown from a small startup into a leading tech retailer, thanks to our dedication to innovation and customer satisfaction. Our journey has been marked by significant milestones and achievements, and we continue to strive for excellence in every aspect of our business.
        </p>
      </div>
      <div className='our-values'>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer-Centricity:</strong> We put our customers at the heart of everything we do, ensuring their needs and preferences guide our decisions.</li>
          <li><strong>Innovation:</strong> We embrace the latest technology and trends to provide cutting-edge products and solutions.</li>
          <li><strong>Integrity:</strong> We operate with transparency and honesty, building trust with our customers and partners.</li>
          <li><strong>Excellence:</strong> We strive for excellence in every aspect of our business, from product quality to customer service.</li>
        </ul>
      </div>
      <div className='contact-info'>
        <h2>Contact Us</h2>
        <p>
          For any inquiries or further information, feel free to reach out to us at:
        </p>
        <p>Email: <a href='mailto:malikabdulsattarmajid@gmail.com'>malikabdulsattarmajid@gmail.com</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Tech Lane, technology city ,Land of Tech</p>
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
                <button onClick={confirm} className="confirm-button">Confirm</button>
              </ul>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default AboutUs;
