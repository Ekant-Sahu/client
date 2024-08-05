import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ethers } from 'ethers';
import metaMaskIcon from '../../assets/metamask-icon.png';
import './Navbar.css';

const Navbar = () => {
  const [data, setData] = useState({
    address: "",
    Balance: null,
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCarDetails, setShowCarDetails] = useState(false);
  const [showBikeDetails, setShowBikeDetails] = useState(false);

  const btnHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]))
        .catch((err) => {
          console.error(err);
          alert("Error connecting to MetaMask");
        });
    } else {
      alert("Please install MetaMask extension!");
    }
  };

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setData((prevData) => ({
          ...prevData,
          Balance: ethers.utils.formatEther(balance),
        }));
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching balance");
      });
  };

  const accountChangeHandler = (account) => {
    setData((prevData) => ({
      ...prevData,
      address: account,
    }));
    getBalance(account);
    console.log(data);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <b><NavLink to="/" className="logo">FinSure</NavLink></b>
        <div className="nav-links">
          <ul>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => {
                setShowDropdown(false);
                setShowCarDetails(false);
                setShowBikeDetails(false);
              }}
            >
              <NavLink to="/" className="nav-link">Products</NavLink>
              {showDropdown && (
                <div className="dropdown">
                  <div
                    className="dropdown-column"
                    onMouseEnter={() => setShowCarDetails(true)}
                    onMouseLeave={() => setShowCarDetails(false)}
                  >
                    <h3>Car Insurance</h3>
                    {showCarDetails && (
                      <ul className="details">
                        <li className='links'><NavLink to="/products/car">Car</NavLink></li>
                        <li className='links'><NavLink to="/products/car/comprehensive">Comprehensive</NavLink></li>
                        
                        <li className='links'><NavLink to="/products/car/own-damage">Own Damage</NavLink></li>
                        <li className='links'><NavLink to="/products/car/zero-depreciation">Zero Depreciation</NavLink></li>
                        <li className='links'><NavLink to="/products/car/electric">Electric Car</NavLink></li>
                       
                      </ul>
                    )}
                  </div>
                  <div
                    className="dropdown-column"
                    onMouseEnter={() => setShowBikeDetails(true)}
                    onMouseLeave={() => setShowBikeDetails(false)}
                  >
                    <h3>Bike Insurance</h3>
                    {showBikeDetails && (
                      <ul className="details">
                        <li className='links'><NavLink to="/products/bike">Bike</NavLink></li>
                        <li className='links'><NavLink to="/products/bike/scooter">Scooter</NavLink></li>
                       
                        <li className='links'><NavLink to="/products/bike/comphrensive">Comphrensive Bike</NavLink></li>
                        <li className='links'><NavLink to="/products/bike/electric">Electric Bike</NavLink></li>
                        
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </li>
            
            <li><NavLink to="/claims" className="nav-link">Claims</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            <li><NavLink to="/faq" className="nav-link">FAQs</NavLink></li>
          </ul>
        </div>
        <div className="metamask-section">
          <img src={metaMaskIcon} alt="MetaMask Icon" className="metamask-icon" onClick={btnHandler} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



