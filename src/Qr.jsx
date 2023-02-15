import React from 'react';
import './Qr.css';
import bground from './Assets/Images/Background.png';
import qr from './Assets/Images/Qr.png'
function Qr() {
    return (
        <div className="contact">
            <img src={bground} className="bgimage" alt="" />
            <div className='qrcode'>
                <img src={qr} alt="" />
            </div>


        </div>

    );
}

export default Qr;
