import React from 'react';
import '../App.css'; 
const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose} className="close-button">✕</button>
    </div>
  );
};

export default Notification;
