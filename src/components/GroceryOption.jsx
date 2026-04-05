import React from 'react'
import {GroceryGridCards} from "../utils/GroceryData"
import GroceryCard from './GroceryCard'

const GroceryOption = () => {
  return (
    <div className='cmax-w-[1200px]ontainer mx-auto w-[90%] md:w-[80%] mt-5 md:mt-20'>
        <h2 className='font-bold text-lg md:text-2xl mb-2 md:mb-10'>Shop groceries on Instamart</h2>
        <div className='flex flex-nowrap  md:gap-10 overflow-x-scroll scrollbar-hide'>
        {
            GroceryGridCards.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData} ></GroceryCard>)
        }
        </div>
    </div>
  )
}

export default GroceryOption