

import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderDetails = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>Your Order is Done</h1>
        <button 
            className="bg-green-800 text-white font-bold text-sm border border-red-500"
            onClick={() => navigate(-1)}
        >Go Back</button>
    </div>
  )
}

export default OrderDetails