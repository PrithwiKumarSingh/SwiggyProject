import React from 'react'

const GroceryCard = ({foodData}) => {
  return (
    <div className='shrink-0 flex flex-col gap-2 items-center '>
        <a href={foodData.action.link}>
            <img className=' w-20 h-25  md:w-36 md:h-45 ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+foodData.imageId} alt="" />
        </a>
        <h2 className=' w-25 md:w-36 md:mt-3 md:font-bold text-center text-sm md:text-xl text-[#02060cbf] '>{foodData.action.text}</h2>
    </div>
  )
}

export default GroceryCard