import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/welcome';
import CarForm from './components/forms/CarForm'; 
import BikeForm from './components/forms/BikeForm'
import Claims from './components/forms/claims';
import './App.css'
import Contact from './components/Contact/contact';
import CompreInsurance from './components/Pages/Cars/comphrenseive';
import BikeIn from './components/Pages/Bikes/bike';
import ScooterInsurance from './components/Pages/Bikes/scooter';
import CompreBike from './components/Pages/Bikes/comprebike';
import ElectricBike from './components/Pages/Bikes/electricbike';
import CarIn from './components/Pages/Cars/car';
import OwnDam from './components/Pages/Cars/owndam';
import ZeroCar from './components/Pages/Cars/zerodepr';
import ElectricCar from './components/Pages/Cars/electric';
import FAQShow from './components/FAQ/faqshow';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/claims" element={<Claims/>}/>
        <Route path="/cars" element={<CarForm />} />
        <Route path="/bikes" element={<BikeForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/car/comprehensive" element={<CompreInsurance/>}/>
        <Route path="//products/bike" element={<BikeIn/>}/>
        <Route path="/products/bike/scooter" element={<ScooterInsurance/>}/>
        <Route path="/products/bike/comphrensive" element={<CompreBike/>}/>
        <Route path="/products/bike/electric" element={<ElectricBike/>}/>
        <Route path="/products/car" element={<CarIn/>}/>
        <Route path="/products/car/own-damage" element={<OwnDam/>}/>
        <Route path="/products/car/zero-depreciation" element={<ZeroCar/>}/>
        <Route path='/products/car/electric' element={<ElectricCar/>}/>
        <Route path='/faq' element={<FAQShow/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;








