import React from 'react';
import './HomePage.css';
import logo from'../src/Assets/Images/Logo.png';
import searchbar from './Assets/Images/searchBar.png'
import { Link } from 'react-router-dom';

function HomePage(props){

    return (
      <>
     
      <div> 
        <img src={logo} className="image" alt="" />
      </div>  
       
      <div className="input">
        <table>
          <tr>
           
            <td>
              <div className='searchbar'>
              <Link to="/Card" >
                <img src={searchbar} alt="img" onClick={props.product} />
                </Link>  
              </div>
              <input type="text" className="text"  placeholder="Search Products"value={props.text}  onChange={props.inputText}/></td>
            
            <td><label >100 Total Products</label></td>
          </tr>
        </table>    
      </div>
      </>
    );
  }


export default HomePage;