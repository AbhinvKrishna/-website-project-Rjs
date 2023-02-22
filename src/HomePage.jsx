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
        <table>
          <tr>
           
            <td>
              <div className='searchbar'>
              {/* <Link to="/Card">              
                <img src={searchbar} alt="img"   />
                </Link>   */}      
              </div>
              <input type="text" className="crdinput" placeholder="Search Products" onKeyDown={detectKeyDown} value={props.text}  onChange={props.inputText}/></td>
             
            <td><label >100 Total Products</label></td>
          </tr>
        </table>    
      </div>
      </>
    );
  }



export default HomePage;