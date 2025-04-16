

import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h1 className="font-bold text-xl">All Proudcts</h1>
        <p>hello</p>
        <Outlet />
    </div>
  )
}

export default Products