import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/welcome';
import CarForm from './components/forms/CarForm'; 
import BikeForm from './components/forms/BikeForm'
import Claims from './components/forms/claims';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/claims" element={<Claims/>}/>
        <Route path="/Carform" element={<CarForm />} />
        <Route path="/Bikeform" element={<BikeForm />} />
      </Routes>
    </Router>
  );
}

export default App;








