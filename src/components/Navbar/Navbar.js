import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ethers } from "ethers";
import metaMaskIcon from '../../assets/metamask-icon.png';
import './Navbar.css';

const Navbar = () => {
  const [data, setData] = useState({
    address: "",
    Balance: null,
  });

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
  };

  console.log(data.address);
  console.log(data.Balance);

  return (
    <nav>
      <b><NavLink to='/' className="logo">FinSure</NavLink></b>
      <div className="nav-section">
        <NavLink to='/products' className="nav-link">Products</NavLink>
        <NavLink to='/renewals' className="nav-link">Renewals</NavLink>
        <NavLink to='/claims' className="nav-link">Claims</NavLink>
        <NavLink to='/resources' className="nav-link">Resources</NavLink>
        <NavLink to='/contact' className="nav-link">Contact</NavLink>
        <NavLink to='/wallet' className="nav-link">Wallet</NavLink>
      </div>
      <div className="nav-section">
        <img src={metaMaskIcon} alt="MetaMask Icon" className="metamask-icon" onClick={btnHandler} />
      </div>
    </nav>
  );
};

export default Navbar;
