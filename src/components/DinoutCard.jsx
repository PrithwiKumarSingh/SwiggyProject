import React from 'react'
import { MdStarRate } from "react-icons/md";
import { HiMiniPercentBadge } from "react-icons/hi2";

const DinoutCard = ({DinoutData}) => {
  return (
    <div className='max-w-sm flex-none rounded-2xl overflow-hidden shadow-md mb-4'>
      <a  target='_blank' href={DinoutData?.cta?.link}>
            <div className='relative'>
            <img className='w-80 h-50' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+ DinoutData?.info?.mediaFiles[0]?.url} alt="" />
            <p className=' text-white font-bold text-xl absolute left-4 bottom-2 z-10 w-[80%] truncate '>{DinoutData?.info?.name}</p>
            <p className=' text-white font-bold text-xl absolute right-4 bottom-2 z-10 flex items-center gap-1 '> <span className='text-white bg-green-600 rounded-full p-0.5 font-bold'>{<MdStarRate size={12}/>}</span> {DinoutData?.info?.rating?.value} </p>
            <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0"></div>
        </div>
        <div className='px-3 py-3 '>
          <div className='flex justify-between font-base text-gray-700 text-xs font-medium'>
            <span>{`${DinoutData?.info?.cuisines[0]} · ${DinoutData?.info?.cuisines[1]} `}</span>
            <span>{DinoutData?.info?.costForTwo}</span>
          </div>
          <div className='font-base text-gray-700 text-xs font-medium flex justify-between my-1'>
            <span>{`${DinoutData?.info?.locationInfo?.landmarkName ? DinoutData?.info?.locationInfo?.landmarkName + ", " : " "}${DinoutData?.info?.locality}, ${DinoutData?.info?.locationInfo?.city?.name}`}</span>
            <span>{DinoutData?.info?.locationInfo?.distanceString}</span>
          </div>

          <div className='w-full bg-[#118a5d] px-2 py-2 rounded-lg text-white flex justify-between text-xs items-center font-bold'>
            <span className=' flex items-center gap-2'> <span>{<HiMiniPercentBadge size={20}/>}</span> <span className='font-bold '>{`${DinoutData?.info?.offerInfoV3?.vendorOffer?.title ? DinoutData?.info?.offerInfoV3?.vendorOffer?.title : DinoutData?.info?.offerInfoV2?.vendorOffer?.header } ${DinoutData?.info?.offerInfoV3?.vendorOffer?.subtitle}`}</span></span>
            <span>{DinoutData?.info?.offerInfoV3?.vendorOffer?.subtext}</span>
          </div>

          <div className='w-full bg-[#acf5d8] px-2 py-2 rounded-lg text-green-700 font-medium my-2'>
            <span>{DinoutData?.info?.customerOffer?.infos[0]?.description}</span>


          </div>

        </div>

      </a>
    </div>
  )
}

export default DinoutCard