import React from 'react';
import './NotFound.css';
import ethImage from './images/background-image-1.jpg';

function NotFound(props) {
    return (
      <div className="page-container">
        <div className="bg" style={{ backgroundImage: 'url(' + ethImage + ')' }}></div>
        <h1 className="title">404</h1>
      </div>
    )
}

export default NotFound;
