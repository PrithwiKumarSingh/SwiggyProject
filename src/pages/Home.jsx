import React from 'react'
import Header from '../components/Header'
import FoodOptions from '../components/FoodOptions'
import GroceryOption from '../components/GroceryOption'
import DinoutOption from '../components/DinoutOption'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <FoodOptions/>
        <GroceryOption/>
        <DinoutOption/>
        <Footer/>
    </div>
  )
}

export default Home