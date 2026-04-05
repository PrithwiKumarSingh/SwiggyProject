import React from 'react'
import NavBar from './NavBar'

const Shimmer = () => {
  return (
    <div className='w-full'>
        <NavBar></NavBar>
        <div className="md:hidden w-full flex gap-2 items-center overflow-hidden px-4 h-15 bg-black">
            <img className="h-8 rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqDecYNB4XzOS5TFHmIBXBgf_DMPzKttsmw&s"
            alt="logo"
          />
          <p className="text-white leading-none text-xs font-bold">Open in desktop and allow cors origin using cors-anywhere.herokuapp.com proxy</p>
          
          <a href="https://cors-anywhere.herokuapp.com/corsdemo" className="px-3 py-2.5 rounded-3xl text-white bg-[#ff5200] font-medium text-sm leading-none whitespace-nowrap">OPEN APP </a>
        </div>
        
    <div className=' md:w-[90%] mx-auto  h-fit'>
        <div className='w-45 h-4 bg-gray-300 mt-2 md:mt-10 rounded '></div>

        <div className='md:hidden flex gap-2 my-2'>
            <div className='w-80 h-25 bg-gray-300 rounded-full '></div>
            <div className='w-80 h-25 bg-gray-300 rounded-full '></div>
            <div className='w-80 h-25 bg-gray-300 rounded-full '></div>
            <div className='w-80 h-25 bg-gray-300 rounded-full '></div>
        </div>

        <div className='hidden md:flex gap-10 my-10'>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
            <div className='w-35 h-35 bg-gray-300 rounded-full '></div>
        </div>
        <div className='my-5 h-[2px] bg-gray-100 w-full'></div>

        <div className='w-55 h-4 bg-gray-300 my-10 rounded '></div>

        <div className='md:hidden flex gap-4 '>
            <div>
                <div className='h-20 w-45 bg-gray-300 rounded-2xl'></div>
                    <div className='ml-2'>
                    <div className='w-15 h-4 bg-gray-300 mt-1 rounded '></div>
                    <div className='w-30 h-4 bg-gray-300 my-1 rounded '></div>
                    <div className='w-10 h-4 bg-gray-300 rounded '></div>
                    <div className='w-15 h-4 bg-gray-300 my-1 rounded '></div>
                    </div>
            </div>
            <div>
                <div className='h-20 w-45 bg-gray-300 rounded-2xl'></div>
                    <div className='ml-2'>
                    <div className='w-15 h-4 bg-gray-300 mt-1 rounded '></div>
                    <div className='w-30 h-4 bg-gray-300 my-1 rounded '></div>
                    <div className='w-10 h-4 bg-gray-300 rounded '></div>
                    <div className='w-15 h-4 bg-gray-300 my-1 rounded '></div>
                    </div>
            </div>
        </div>

        <div className='hidden md:flex gap-8'>
            <div>
                <div className='h-40 w-70 bg-gray-300 rounded-2xl'></div>
                    <div className='ml-2'>
                    <div className='w-20 h-4 bg-gray-300 mt-1 rounded '></div>
                    <div className='w-45 h-4 bg-gray-300 my-1 rounded '></div>
                    <div className='w-25 h-4 bg-gray-300 rounded '></div>
                    <div className='w-35 h-4 bg-gray-300 my-1 rounded '></div>
                    </div>
            </div>
            <div>
                <div className='h-40 w-70 bg-gray-300 rounded-2xl'></div>
                    <div className='ml-2'>
                    <div className='w-20 h-4 bg-gray-300 mt-1 rounded '></div>
                    <div className='w-45 h-4 bg-gray-300 my-1 rounded '></div>
                    <div className='w-25 h-4 bg-gray-300 rounded '></div>
                    <div className='w-35 h-4 bg-gray-300 my-1 rounded '></div>
                    </div>
            </div>
            <div>
                <div className='h-40 w-70 bg-gray-300 rounded-2xl'></div>
                    <div className='ml-2'>
                    <div className='w-20 h-4 bg-gray-300 mt-1 rounded '></div>
                    <div className='w-45 h-4 bg-gray-300 my-1 rounded '></div>
                    <div className='w-25 h-4 bg-gray-300 rounded '></div>
                    <div className='w-35 h-4 bg-gray-300 my-1 rounded '></div>
                    </div>
            </div>
            <div>
                <div className='h-40 w-70 bg-gray-300 rounded-2xl'></div>
                    <div className='ml-2'>
                    <div className='w-20 h-4 bg-gray-300 mt-1 rounded '></div>
                    <div className='w-45 h-4 bg-gray-300 my-1 rounded '></div>
                    <div className='w-25 h-4 bg-gray-300 rounded '></div>
                    <div className='w-35 h-4 bg-gray-300 my-1 rounded '></div>
                    </div>
            </div>
            <div>
                <div className='h-40 w-70 bg-gray-300 rounded-2xl'></div>
                    <div className='ml-2'>
                    <div className='w-20 h-4 bg-gray-300 mt-1 rounded '></div>
                    <div className='w-45 h-4 bg-gray-300 my-1 rounded '></div>
                    <div className='w-25 h-4 bg-gray-300 rounded '></div>
                    <div className='w-35 h-4 bg-gray-300 my-1 rounded '></div>
                    </div>
            </div>
        </div>

        <div className='hidden md:block my-8 h-[2px] bg-gray-100 w-full'></div>
        <div className='hidden md:block w-90 h-4 bg-gray-300 my-10 rounded '></div>
        <div className='hidden md:block w-20 h-8 rounded-3xl my-3 bg-gray-300'></div>


    </div>
    </div>
  )
}

export default Shimmer