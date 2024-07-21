import React from "react";
import "./styles.css";
import { useStateContext } from "../../context";
import { ethers } from "ethers";
import { useState } from "react";

const CarForm = () => {
  const { createInsurance } = useStateContext();
  const [form, setForm] = useState({
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
      console.error("Failed to create insurance:", error);
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
      </form>
    </div>
  );
};

export default CarForm;
