import React from "react";
import "./styles.css";
import { useStateContext } from "../../context";
import { useState } from "react";

const Claims = () => {
  const { createInsurance, claimInsurance, withdrawFunds, connect, address } =
    useStateContext();
  const [form, setForm] = useState({
    _id: 0,
    _vehicleDetails: "",
    _premium: "",
    _insuredAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleClaim = async (e) => {
    e.preventDefault();
    try {
      const result = await claimInsurance(form._id, form._vehicleDetails);
      console.log("Insurance claimed successfully:", result);
    } catch (error) {
      console.error("Failed to claim insurance:", error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="title">Car Details</h1>
        <p className="sub">Fill the details below</p>
        <br />
        <form className="form" onSubmit={handleClaim}>
          <input
            type="text"
            name="_vehicleDetails"
            className="input"
            placeholder="Vehicle Details"
            value={form._vehicleDetails}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="_premium"
            className="input"
            placeholder="Premium Amount (₹)"
            pattern="^\₹?\d+(,\d{3})*(\.\d{1,2})?$"
            title="Please enter a valid amount in rupees"
            value={form._premium}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="_insuredAmount"
            className="input"
            placeholder="Insured Amount (₹)"
            pattern="^\₹?\d+(,\d{3})*(\.\d{1,2})?$"
            title="Please enter a valid amount in rupees"
            value={form._insuredAmount}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button" onClick={handleClaim}>
            Submit
          </button>
        </form>
        {/* <button onClick={handleClaim} className="submit-button">
        Claim Insurance
      </button>
      <button onClick={handleWithdraw} className="submit-button">
        Withdraw Funds
      </button> */}
      </div>
    </div>
  );
};

export default Claims;
