import React from 'react';
import './HomePage.css';
import logo from'../src/Assets/Images/Logo.png';
//import searchbar from './Assets/Images/searchBar.png'
import { useNavigate } from 'react-router-dom';

function HomePage(props){

const navigate=useNavigate();

 const detectKeyDown=(e)=>{
  if(e.key==="Enter"){
    navigate("/Card")

  }
  }

 



    return (
      <>
     
      <div> 
        <img src={logo} className="image" alt="" />
      </div>  
       
      <div className="input">
              <input type="text" className="crdinput" placeholder="Search Products" onKeyDown={detectKeyDown} value={props.text}  onChange={props.inputText}/> 
              <p>100+ Products</p>
      </div>
      </>
    );
  }



export default HomePage;