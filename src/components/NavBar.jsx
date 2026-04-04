import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TbBriefcase2 } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { HiOutlinePercentBadge } from "react-icons/hi2";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const NavBar = () => {
    const counter = useSelector(state => state.cartslice.count);
  return ( 
    <div className='w-full bg-white shadow-md'>
        <div className='w-300 py-5 mx-auto flex justify-between items-center'>
            <div className='flex items-center'>
                <a href="/">
                <img className='h-12 hover:scale-110 transition cursor-pointer rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqDecYNB4XzOS5TFHmIBXBgf_DMPzKttsmw&s" alt="" />
                </a>
                <p className='flex items-center gap-3 hover:text-orange-500 transition'> <span className='underline font-bold text-medium ml-10'>Other</span> <IoIosArrowDown className='text-orange-500' size={20}/> </p>
            </div>

            <div className='text-base font-medium  flex gap-15'>
                <a className='flex items-center gap-2 hover:text-[#FF5200] transition' target='_blank' href="https://www.swiggy.com/corporate/">
                    <TbBriefcase2 size={22}/>
                   <span> Swiggy Carporate</span>
                </a>
                <a className='flex items-center gap-2 hover:text-[#FF5200] transition' href="">
                    <IoSearch size={22}/>
                    <span> Search</span>
                    </a>
                <a className='flex items-center gap-2 hover:text-[#FF5200] transition' target='_blank' href="https://www.swiggy.com/offers-near-me">
                    <HiOutlinePercentBadge size={22}/>
                  <span>Offers</span>  
                    </a>
                <a className='flex items-center gap-2 hover:text-[#FF5200] transition' target='_blank' href="https://www.swiggy.com/support">
                    <IoHelpBuoyOutline size={22}/>
                   <span> Help</span>
                   </a>
                <a className='flex items-center gap-2 hover:text-[#FF5200] transition' target='_blank' href="">
                    <CgProfile size={22}/>
                  <span>  Sign In</span>
                    </a>

                    <Link to={"/checkout"} >
                <div className='flex items-center gap-1 hover:text-[#FF5200] transition'>
                {
                    counter > 0 ? <div className='w-4 h-4 flex justify-center items-center rounded-t-sm text-xs font-bold text-white p-2.5 bg-[#1BA672] hover:bg-[#ff5200] '>{counter}</div>
                    : <div className='w-4 h-4 flex justify-center items-center rounded-t-sm text-xs font-bold text-black border  '>{counter}</div>
                }
                
                
                   <span>Cart</span> 
                </div>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default NavBar