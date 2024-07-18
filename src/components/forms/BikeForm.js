import React from "react";
import "./styles.css";

const BikeForm = () => {
  return (
    <div className="form-container">
      <h1 className="title">Form Page</h1>
      <form className="form">
        <input type="text" className="input" placeholder="Input 1" />
        <input type="text" className="input" placeholder="Input 2" />
        <input type="text" className="input" placeholder="Input 3" />
        <input type="text" className="input" placeholder="Input 4" />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BikeForm;