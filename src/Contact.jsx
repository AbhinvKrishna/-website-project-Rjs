import React from 'react';
import './Contact.css';
import bground from './Assets/Images/Background.png';
function Contact() {
    return (
        <div className="contact">
            <img src={bground} className="bgimage" alt="" />
            <div className='number1'><b>Contact:</b>
                       </div>
                       <div className='number2'><b>1800-</b>

                       </div>
                       <div className='number3'><b>4800-</b>
                       
                       </div>
                       <div className='number4'><b>1212</b>
                       
                       </div>
        </div>

    );
}

export default Contact;
