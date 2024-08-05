import React from "react";
import "./styles.css";
import { useStateContext } from "../../context";
import { ethers } from "ethers";
import { useState } from "react";

const CarForm = () => {
  const { createInsurance, claimInsurance, withdrawFunds } = useStateContext();
  const [form, setForm] = useState({
    _id: 0,
    _vehicleDetails: "cg-06-bf-2016",
    _premium: ethers.utils.parseUnits("1", 18), // BigNumber
    _insuredAmount: ethers.utils.parseUnits("10", 18), // BigNumber
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createInsurance([
        form._vehicleDetails, // string
        form._premium, // BigNumber
        form._insuredAmount, // BigNumber
      ]);
      console.log("Insurance created successfully:", result);
    } catch (error) {
      console.error("Failed to creat insurance:", error);
    }
  };

  const handleClaim = async (e) => {
    e.preventDefault();
    try {
      const result = await claimInsurance([form._id, form._vehicleDetails]);
      console.log("Insurance claimed successfully:", result);
    } catch (error) {
      console.error("Failed to claim insurance:", error);
    }
  };
  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      const result = await withdrawFunds();
      console.log("Insurance withdrawed successfully:", result);
    } catch (error) {
      console.error("Failed to withdraw fundes:", error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="title">Car Details</h1>
        <p className="sub">Fill the details below</p>
        <br/>
        <form className="form">
          <input type="text" className="input" placeholder="Name of Owner"required />
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

export default CarForm;
