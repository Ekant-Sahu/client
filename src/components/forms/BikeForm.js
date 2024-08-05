import React from "react";
import "./styles.css";

const BikeForm = () => {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="title">Bike Details</h1>
        <p className="sub">Fill the details below</p>
        <br/>
        <form className="form">
          <input type="text" className="input" placeholder="Name of Owner" required/>
          <input type="file" className="input" placeholder="Vehicle Details"required />
          <input 
            type="text" 
            className="input" 
            placeholder="Premium Amount (₹)" 
            pattern="^\₹?\d+(,\d{3})*(\.\d{1,2})?$" 
            title="Please enter a valid amount in rupees" 
            required
          />
          <input 
            type="text" 
            className="input" 
            placeholder="Insured Amount (₹)" 
            pattern="^\₹?\d+(,\d{3})*(\.\d{1,2})?$" 
            title="Please enter a valid amount in rupees" 
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BikeForm;