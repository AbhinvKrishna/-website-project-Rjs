import React, { Component } from 'react';
import './HomePage.css';
import logo from'../src/Assets/Images/Logo.png';
import { Link } from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <>
      <div>
        <img src={logo} className="image" alt="" />
      </div>     
      <div class="input">
        <table>
          <tr>
            <Link to="/Card" >
            <td><input type="text" className="text" placeholder="Search Products"  /></td>
            </Link>
            <td><label >100 Total Products</label></td>
          </tr>
        </table>    
      </div>
      </>
    );
  }
}

export default App;