import React from 'react'
import { useNavigate } from 'react-router-dom'


function Ordererr() {
  const cardNav= useNavigate();

  const toCard=()=>{
      cardNav("/Card")
  }

  return (
    <div>
       <div >
                <h1>Empty Page!</h1>
                <p>| Please! Add to Cart For displaying Your interested items here |</p>
                <button style={{background:"black", color:"white", borderRadius:"10px"}} onClick={toCard}>&larr; Back</button>
            </div>
    </div>
  )
}

export default Ordererr
