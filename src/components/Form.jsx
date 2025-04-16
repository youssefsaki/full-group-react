

import React from 'react'
import {  useNavigate } from 'react-router-dom'

export const Form = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
            navigate('/', { replace: true})
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <section>
                <label htmlFor="">Email</label>
                <input type="text"  />
            </section>
            <section>
                <label htmlFor="">Password</label>
                <input type="text"  />
            </section>
            <input type="submit" value='Submit' />
        </form>
    </div>
  )
}
