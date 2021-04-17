import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-data">
        <div className="container">
        <div className="row mt-2 mb-2">
          <div className="col-md-6 col-sm-12">
            <h2>Travellers Nest </h2> 
            <p>is a new hotel booking site, where you can book your room while travelling.</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h3>Our Partners</h3>
            <p>Oyo Hotel</p>
            <p>Oasis Hotel</p>
            <p>Mangal Hotel</p>
            <p>Hotel Cox's In</p>
            <p>Rajar Hut</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h3>Contact Us</h3>
            <a href="https://ecomm.nayyarshaikh.com/">Facebook</a>
            <p>Phone: 01782557468</p>
          </div>
        </div>
        </div>
        </div>
        <p style={{textAlign:'center'}}>Copyright {new Date().getFullYear()} By Jubair Ahmed</p>
      </footer>
    );
};

export default Footer;