import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const [drop, setDrop] = useState(false)


  return (
    <div className='w-full bg-gray-100 py-10'>
        <div className='container mx-auto grid grid-cols-5 mb-10 px-25'>
            <div className=''>
                <img className='mb-2' src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="" />
                <h2 className='text-xl font-medium text-gray-600'>&#169; 2025 Swiggy Limited</h2>
            </div>
            
            <div className='w-40'>
                <h2 className='text-xl font-bold mb-4'>Company</h2>
                <div className='flex flex-col gap-2 font-medium text-gray-600'>
                <a target='_blank' href="https://careers.swiggy.com/#/">About Us </a>
                <a target='_blank' href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target='_blank' href="https://careers.swiggy.com/#/">Careers</a>
                <a target='_blank' href="https://careers.swiggy.com/#/">Team</a>
                <a target='_blank' href="https://www.swiggy.com/swiggy-super">Swiggy One</a>
                <a target='_blank' href="https://www.swiggy.com/instamart">Swiggy Instamart</a>
                <a target='_blank' href="https://www.swiggy.com/dineout">Swiggy Dineout</a>
                <a target='_blank' href="https://mini.store/">SMinis</a>
                <a target='_blank' href="https://pyng.co.in/">Pyng</a>
                </div>
            </div>

            <div className='w-40'>
                <h2 className='text-xl font-bold mb-4'>Contact us</h2>
                <div className='flex flex-col gap-2 font-medium text-gray-600'>
                <a target='_blank' href="https://www.swiggy.com/support">Help & Support </a>
                <a target='_blank' href="https://partner.swiggy.com/food/login">Partner with us</a>
                <a target='_blank' href="https://ride.swiggy.com/">Ride with us</a>
                </div>

                <h2 className='text-xl font-bold mb-4 mt-10'>Legal</h2>
                <div className='flex flex-col gap-2 font-medium text-gray-600'>
                <a target='_blank' href="https://www.swiggy.com/terms-and-conditions">Terms & Conditions </a>
                <a target='_blank' href="https://www.swiggy.com/cookie-policy">Cookie Policy</a>
                <a target='_blank' href="https://www.swiggy.com/privacy-policy">Privacy Policy</a>
                </div>
            </div>

            <div className='w-40'>
                <h2 className='text-xl font-bold mb-4'>Available in:</h2>
                <div className='flex flex-col gap-2 font-medium text-gray-600'>
                <a target='_blank' href="https://careers.swiggy.com/#/">bangalore </a>
                <a target='_blank' href="https://www.swiggy.com/corporate/">gurgaon</a>
                <a target='_blank' href="https://careers.swiggy.com/#/">hydrabad</a>
                <a target='_blank' href="https://careers.swiggy.com/#/">delhi</a>
                <a target='_blank' href="https://www.swiggy.com/swiggy-super">mumbai</a>
                <a target='_blank' href="https://www.swiggy.com/instamart">pune</a>
                </div>
                <button onClick={()=>setDrop(!drop)} className='py-1 border-gray-400 px-4 border rounded-lg flex items-center gap-2 text-gray-700 mt-5'>685 cities <span>{drop ? <IoIosArrowDown/> : <IoIosArrowUp/>}</span></button>
            </div>

            <div className='w-40'>
                <h2 className='text-xl font-bold mb-4'>Life at Swiggy</h2>
                <div className='flex flex-col gap-2 font-medium text-gray-600'>
                <a target='_blank' href="https://careers.swiggy.com/#/">Explore with Swiggy</a>
                <a target='_blank' href="https://www.swiggy.com/corporate/">Swiggy News</a>
                <a target='_blank' href="https://careers.swiggy.com/#/">Snackables</a>
                </div>

                <div>
                    <h2 className='text-xl font-bold mt-8'>Social Links</h2>
                    <div className='flex gap-2 text-2xl mt-2 text-gray-700 cursor-pointer'>
                        <a target='_blank' href='https://github.com/PrithwiKumarSingh'>{<FaGithub/>}</a>
                        <a target='_blank' href='https://x.com/PrithwiSingh_'>{<FaXTwitter/>}</a>
                        <a target='_blank' href='https://www.instagram.com/prithwikumarmaurya/'>{<FaInstagram/>}</a>
                        <a target='_blank' href='https://www.linkedin.com/in/prithwikumar/'>{<FaLinkedin/>}</a>

                    </div>
                </div>
            </div>

            


            


        </div>
        <div className='h-0.5 w-full bg-gray-400 my-8'></div>
        <div className='flex ml-100 gap-6 items-center my-4'>
                <h2 className='text-2xl font-bold text-gray-700 '>For better experience, download the Swiggy app now</h2>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" />
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" />
            </div>

    </div>
  )
}

export default Footer






