import React from 'react';
import './Card.css';
export default function Card({logo, title, description}) {
  return (
    <div className = "cardClass">
        <div className='cardHeader'>
        <img src = {logo} />
        <p className='title'>{title}</p>
        </div>
      
     <div >
     <p className='description'>{description}</p>
     </div> 
    </div>
  )
}
