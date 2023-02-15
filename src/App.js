
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import Card from './Component/CardDesign/Card';
import OrderList from './Component/OrderList/OrderList';
import Contact from './Contact';
import Qr from './Qr';
import imgp from './Component/OrderList/OrderListImages/pepsico.jpeg'
import imgk from './Component/OrderList/OrderListImages/Kurkure1st.webp'
import imgw from './Component/OrderList/OrderListImages/bottle.jpeg'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);


  const [price, setPrice] = useState(0);



  const addPepsi = () => {

      setImg1(imgp)
      setPrice(price + 35)

  }

  const addKurkure = () => {
      setImg2(imgk)
      setPrice(price + 15)

  }

  const addWater = () => {
      setImg3(imgw)
      setPrice(price + 10)
  }
  return (
    <div className='container'>

      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
           <Route exact path="/Card" element={<Card addPepsi={addPepsi} addKurkure={addKurkure} addWater={addWater} />} />
           <Route exact path="/OrderList" element={ <OrderList image1={img1} image2={img2} image3={img3} price={price + "/-"} />} /> 
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Qr" element={<Qr />} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;
