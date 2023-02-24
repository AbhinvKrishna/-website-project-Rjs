import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import Card from './Component/CardDesign/Card';
import OrderList from './Component/OrderList/OrderList';
import Contact from './Contact';
import Qr from './Qr';
import Carderr from './Component/CardDesign/Carderr';
import imgp from './Component/OrderList/OrderListImages/pepsico.jpeg'
import imgk from './Component/OrderList/OrderListImages/Kurkure1st.webp'
import imgw from './Component/OrderList/OrderListImages/bottle.jpeg'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Ordererr from './Component/OrderList/Ordererr';


function App() {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);


  const [price, setPrice] = useState(0);
  
  const [click, setClick]=useState({
    visibility:"hidden"
   })

   //Alert Group
   const [alertMsgP, setAlertMsgP]=useState({
    visibility:"hidden"
   })
   const [alertMsgK, setAlertMsgK]=useState({
    visibility:"hidden"
   })
   const [alertMsgW, setAlertMsgW]=useState({
    visibility:"hidden"
   })

   //


  

  //HomePage search functionalities

  const [text, setText] = useState("");

  const inputText = (event) => {
    setText(event.target.value)
  }

  const product = () => {
    setText(text)
  }
  
  //
  const addPepsi = () => {

    setImg1(imgp)
    setPrice(price + 35)
    setClick({visibility:"visible"})
    setAlertMsgP({visibility:"visible"},setTimeout(()=>{
      setAlertMsgP({visibility:"hidden"})
    }, 2000))
   

  }

  const addKurkure = () => {
    setImg2(imgk)
    setPrice(price + 15)
    setClick({visibility:"visible"})
    setAlertMsgK({visibility:"visible"},setTimeout(()=>{
      setAlertMsgK({visibility:"hidden"})
    }, 2000))

  }

  const addWater = () => {
    setImg3(imgw)
    setPrice(price + 10)
    setClick({visibility:"visible"})
    setAlertMsgW({visibility:"visible"},setTimeout(()=>{
      setAlertMsgW({visibility:"hidden"})
    }, 2000))
  }

 

  return (
    <div className='container'>
     <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage text={text} inputText={inputText} product={product} />} />
          <Route exact path="/Card" element={text.length===0?<Carderr/>: <Card addPepsi={addPepsi} addKurkure={addKurkure} addWater={addWater} text={text} alertP={alertMsgP} alertK={alertMsgK} alertW={alertMsgW}/>} />
          <Route exact path="/OrderList" element={click.visibility==="hidden"?<Ordererr/>: <OrderList click={click} image1={img1} image2={img2} image3={img3} price={price + "/-"} />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Qr" element={<Qr />} />

        </Routes>
      </Router> 
    </div>

  );
}

export default App;
