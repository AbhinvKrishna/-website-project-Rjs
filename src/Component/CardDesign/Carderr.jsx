import React from 'react'
import './Carderr.css'
import { useNavigate } from 'react-router-dom';


function Carderr() {
  const homeNav = useNavigate();

  const toHome=()=>{
    homeNav("/")
}
  return (
    <div>
            <div >
                <h1>Empty Page!</h1>
                <p>| Please! Search For displaying Your interested items here |</p>
                <button className='backhome' onClick={toHome}>&larr; Back</button>
            </div>
    </div>
  )
}

export default Carderr
