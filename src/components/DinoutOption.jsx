import React from 'react'
import {DineoutRestaurants} from '../utils/DineoutRestaurants'
import DinoutCard from './DinoutCard'

const DinoutOption = () => {
  return (
    <div className=' w-[90%] md:w-[80%] container mx-auto mt-10 mb-6  md:mt-20 '>
      <h2 className='font-bold md:text-2xl mb-4 md:mb-10'>Discover best restaurants on Dineout</h2>
      <div className='flex flex-none gap-5 overflow-x-auto scrollbar-hide'>
          {
            DineoutRestaurants.map((DinoutData)=> <DinoutCard key={DinoutData?.info?.id} DinoutData={DinoutData}></DinoutCard>)
          }
      </div>
      <div className='hidden md:block my-15'>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="" />
      </div>
    </div>
  )
}

export default DinoutOption