import React from "react";

import "./Header.css";

import img from './Assets/Images/menu_icon.png';
import {useNavigate} from "react-router-dom";
const Header = () => {
     const navigate=useNavigate()
    const toOrderList=()=>{

        navigate("/OrderList")

    } 



    return (
        
        <header >
            <div className="container">
    
            <nav className="header-nav">             
            <div className="menu" >
                <img src={img} alt=""></img>
                  
                </div>
               <div>
                <button  onClick={toOrderList}  className="button">Order</button>
                </div>                    
                
                
                
                
            </nav>
            </div>

            
        </header>
        )

}

export default Header