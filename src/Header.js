import React from "react";

import "./Header.css";

import img from './Assets/Images/menu_icon.png';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        
        <header >
            <div className="container">
    
    </div>
            <nav className="header-nav">             
            <div className="menu" >
                <img src={img} alt=""></img>
                  
                </div>
               <div>
                <Link to="/OrderList"><button className="button">Order</button></Link> 
                </div>                    
                
                
                
                
            </nav>

            
        </header>
        )

}

export default Header