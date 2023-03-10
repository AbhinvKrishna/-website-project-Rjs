import React from 'react'
import './OrderList.css'
import { useNavigate } from 'react-router-dom'
/* import imgp from './OrderListImages/pepsico.jpeg';
import imgk from './OrderListImages/Kurkure1st.webp';
import imgw from './OrderListImages/bottle.jpeg'; */

function OrderList(props) {

    const cardNav= useNavigate();

    const toCard=()=>{
        cardNav("/Card")
    }

    return (
        <div className='Orderbase'>
            <div className="orderbox" style={props.click}>
                <div className="products">
                <img className='' src={props.image3} alt="" />
                <img className='' src={props.image2} alt="" />
                <img className='' src={props.image1} alt="" />
                </div>
                <div className="otbox">
                    <div className='otext'> Tue-21-12-2023 12:00:12PM</div>
                        <div className="ordprice"><b>{props.price}</b></div>                
                </div>
            </div>
            <div className="orderbox" style={props.click}>
                <div className="products">
                <img className='' src={props.image3} alt="" />
                <img className='' src={props.image2} alt="" />
                <img className='' src={props.image1} alt="" />
                </div>
                <div className="otbox">
                    <div className='otext'> Tue-21-12-2023 12:00:12PM</div>
                        <div className="ordprice"><b>{props.price}</b></div>                
                </div>
            </div>
            <div className="orderbox" style={props.click}>
                <div className="products">
                <img className='' src={props.image3} alt="" />
                <img className='' src={props.image2} alt="" />
                <img className='' src={props.image1} alt="" />
                </div>
                <div className="otbox">
                    <div className='otext'> Tue-21-12-2023 12:00:12PM</div>
                        <div className="ordprice"><b>{props.price}</b></div>                
                </div>
            </div>

            <button style={{background:"black", color:"white", borderRadius:"10px"}} onClick={toCard}>&larr; Back</button>
           
            </div>
       
    )
}

export default OrderList;
