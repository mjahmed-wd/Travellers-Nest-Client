import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    // Hero section / Introduction
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 hero-description">
            <div style={{ display: "inline-block" }}>
              <h1 className="hero-title">Travellers Nest</h1>
              <h2 className="hero-subtitle">It's Your Home</h2>
              <div className="hero-buttons mt-5">
                <button className="hero-btn-white">
                  <a href="#query">Contact Us</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 happy-customer">
            <div>
            {/* <img src={happyCustomer} alt=""/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
