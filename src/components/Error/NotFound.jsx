import React from 'react'

import notFound from "../../img/notFound.jpeg"
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate=useNavigate();
  return (
    <div className="error">
      <img src={notFound} width="500px" alt=""/>
     
      <button className='btn'onClick={()=>navigate("/")}>GO HOME</button>
    </div>
  )
}

export default NotFound