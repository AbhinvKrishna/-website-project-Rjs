import React from 'react'
import './Card.css'
import imgp from './Cardsimages/pepsico.jpeg';
import imgk from './Cardsimages/Kurkure1st.webp';
import imgw from './Cardsimages/bottle.jpeg';

function Card(props) {

    let a = "pepsi"
    let b = "kurkure"
    let c = "water"


    return (

        <div className='cardbase'>
            <div className="cardscroll">
                <div className="cardbox" style={{ visibility: a.toLowerCase().includes(props.text.toLowerCase()) ? 'visible' : 'hidden' }}>
                    <img src={imgp} alt="" className='pepsi' />

                    <div className="txtbase">
                        <div className='text'>P e p s i</div>
                        <div className="items">
                            <div className="money">₹ 35/-</div>
                            <button className='cartbtn' onClick={props.addPepsi}>Add</button>
                        </div>                        
                    </div>
                    <div className="alertcart" style={props.alertP}>Item is added to Cart</div>
                </div>
                <div className="cardbox" style={{ visibility: b.toLowerCase().includes(props.text.toLowerCase()) ? 'visible' : 'hidden' }}>
                    <img className='kurk' src={imgk} alt="" />
                    <div className="txtbase">
                        <div className='text'>K u r k u r e</div>
                        <div className="items">
                            <div className="money">₹ 10/-</div>
                            <button className='cartbtn' onClick={props.addKurkure}>Add</button>
                        </div>
                    </div>
                    <div className="alertcart" style={props.alertK}>Item is added to Cart</div>
                </div>
                <div className="cardbox" style={{ visibility: c.toLowerCase().includes(props.text.toLowerCase()) ? 'visible' : 'hidden' }}>
                    <img className='water' src={imgw} alt="" />
                    <div className="txtbase">
                        <div className='text'>W a t e r</div>
                        <div className="items">
                            <div className="money">₹ 20/-</div>
                            <button className='cartbtn' onClick={props.addWater}>Add</button>
                        </div>
                    </div>
                    <div className="alertcart" style={props.alertW}>Item is added to Cart</div>
                </div>
                <div className="cardbox" style={{ visibility: a.toLowerCase().includes(props.text.toLowerCase()) ? 'visible' : 'hidden' }}>
                    <img className='pepsi' src={imgp} alt="" />

                    <div className="txtbase">
                        <div className='text'>P e p s i</div>
                        <div className="items">
                            <div className="money">₹ 35/-</div>
                            <button className='cartbtn' onClick={props.addPepsi}>Add</button>
                        </div>
                    </div>
                    
                </div>
                <div className="cardbox" style={{ visibility: a.toLowerCase().includes(props.text.toLowerCase()) ? 'visible' : 'hidden' }}>
                    <img className='pepsi' src={imgp} alt="" />

                    <div className="txtbase">
                        <div className='text'>P e p s i</div>
                        <div className="items">
                            <div className="money">₹ 35/-</div>
                            <button className='cartbtn' onClick={props.addPepsi}>Add</button>
                        </div>
                    </div>
                    
                </div>
                <div className="cardbox" style={{ visibility: a.toLowerCase().includes(props.text.toLowerCase()) ? 'visible' : 'hidden' }}>
                    <img className='pepsi' src={imgp} alt="" />

                    <div className="txtbase">
                        <div className='text'>P e p s i</div>
                        <div className="items">
                            <div className="money">₹ 35/-</div>
                            <button className='cartbtn' onClick={props.addPepsi}>Add</button>
                        </div>
                    </div>
                    
                </div>
                <div className="cardbox" style={{ visibility: b.toLowerCase().includes(props.text.toLowerCase()) ? 'visible' : 'hidden' }}>
                    <img className='kurk' src={imgk} alt="" />
                    <div className="txtbase">
                        <div className='text'>K u r k u r e</div>
                        <div className="items">
                            <div className="money">₹ 10/-</div>
                            <button className='cartbtn' onClick={props.addKurkure}>Add</button>
                        </div>

                    </div>
                  
                </div>
            </div>

        </div>




    )
}

export default Card;