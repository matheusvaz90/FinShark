import React from 'react'
import './Card.css'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price})  => {
  return <div className="card">
    <img src = "./apple-logo.png" alt="Apple Logo" />
    <div className="details">
        <h2>{companyName} ({ticker})
        </h2>
        <p>${price}</p>
    </div>
   <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, in?</p>
  </div>
}

export default Card