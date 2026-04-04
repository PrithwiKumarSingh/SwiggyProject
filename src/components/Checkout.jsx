import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const items = useSelector(state => state.cartslice.items);
    console.log(items);
  return (
    <div>
        {
            items.map(item => <h1>{item.name}</h1>)
        }
    </div>
  )
}

export default Checkout