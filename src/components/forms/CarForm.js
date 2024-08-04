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
    <div className="form-container">
      <h1 className="title">Form Page</h1>
      <form className="form">
        <input type="text" className="input" placeholder="Input 1" />
        <input type="text" className="input" placeholder="Input 2" />
        <input type="text" className="input" placeholder="Input 3" />
        <input type="text" className="input" placeholder="Input 4" />
        <button type="submit" onClick={handleSubmit} className="submit-button">
          Submit
        </button>
        <button onClick={handleClaim} className="submit-button">
          Claim
        </button>
        <button onClick={handleWithdraw} className="submit-button">
          withdraw
        </button>
      </form>
    </div>
  );
};

export default CarForm;
