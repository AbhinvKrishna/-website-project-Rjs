import React from 'react'
import './Card.css'
import imgp from './Cardsimages/pepsico.jpeg';
import imgk from './Cardsimages/Kurkure1st.webp';
import imgw from './Cardsimages/bottle.jpeg';

function Card(props) {

    let a="pepsi"
    let b="kurkure"
    let c="water"


    return (

        <div className='cardbase'>
            <div className="box" style={{visibility: a.toLowerCase().includes(props.text.toLowerCase())?'visible':'hidden'}}>
                <img src={imgp} alt="" />
                <div className="textBox">
                    <div className='text'>P e p s i
                        <div className="price"><b>₹ 35/-</b></div>
                    </div>
                    <button onClick={props.addPepsi}>Add</button>
                </div>
            </div>
            <div className="box" style={{visibility: b.toLowerCase().includes(props.text.toLowerCase())?'visible':'hidden'}}>
                <img className='kurk' src={imgk} alt="" />
                <div className="textBox">
                    <div className='text'>K u r k u r e
                        <div className="price"><b>₹ 15/-</b></div>
                    </div>
                    <button onClick={props.addKurkure}>Add</button>
                </div>
            </div>
            <div className="box" style={{visibility: c.toLowerCase().includes(props.text.toLowerCase())?'visible':'hidden'}}>
                <img className='water' src={imgw} alt="" />
                <div className="WatertextBox">
                    <div className='text'>W a t e r
                        <div className="price"><b>₹ 10/-</b></div>
                    </div>
                    <button className='wbtn' onClick={props.addWater}>Add</button>
                </div>
            </div>
        </div>




    )
}

export default Card;