import React from 'react'
import Header from '../components/Header'
import FoodOptions from '../components/FoodOptions'
import GroceryOption from '../components/GroceryOption'
import DinoutOption from '../components/DinoutOption'

const Home = () => {
  return (
    <div>
        <Header/>
        <FoodOptions/>
        <GroceryOption/>
        <DinoutOption/>
    </div>
  )
}

export default Home