import React, { useState } from 'react';
import '../App.css';

function Support({ isModalOpen, toggleModal, cartItems,removeFromCart }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='help-support'>
      <div className='faqs'>
        <h1>Frequently Asked Questions (FAQs)</h1>

        <div className='faq-section'>
          <h2>Ordering and Payment:</h2>
          <ul>
            <li><strong>How can I place an order?</strong> To place an order, browse our products, select the items you want, and click the "Order Now" button. Follow the prompts to enter your shipping and payment information.</li>
            <li><strong>What payment methods are accepted?</strong> We accept various payment methods including credit/debit cards, PayPal, and other secure payment options.</li>
            <li><strong>Can I cancel or modify my order?</strong> Orders can be modified or canceled within a specific timeframe. Please contact our support team as soon as possible for assistance.</li>
          </ul>
        </div>

        <div className='faq-section'>
          <h2>Shipping and Delivery:</h2>
          <ul>
            <li><strong>How long will it take to receive my order?</strong> Shipping times vary based on your location and the shipping method selected. You will receive an estimated delivery time during checkout.</li>
            <li><strong>How can I track my order?</strong> After your order is shipped, you will receive a tracking number via email to monitor your shipment's progress.</li>
            <li><strong>What are the shipping costs?</strong> Shipping costs are calculated based on your location and the weight of your order. You can view the shipping cost at checkout before finalizing your purchase.</li>
          </ul>
        </div>

        <div className='faq-section'>
          <h2>Returns and Refunds:</h2>
          <ul>
            <li><strong>What is the return policy?</strong> We offer a return policy within a specified period. Please review our return policy on the website or contact support for detailed information.</li>
            <li><strong>How do I initiate a return?</strong> To initiate a return, contact our customer support team with your order details. They will guide you through the return process.</li>
            <li><strong>When will I receive my refund?</strong> Refunds are processed once the returned item is received and inspected. The refund will be credited to your original payment method.</li>
          </ul>
        </div>
      </div>

      <div className='contact-form'>
        <h2>Still Have Questions?</h2>
        <p>If you have any other questions or need further assistance, please fill out the form below:</p>
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

        {submitted ? (
          <p>Thank you for your message! We will get back to you as soon as possible. Reload for another form</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button type='submit'>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Support;
