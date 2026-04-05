import React from "react";
import { Link } from "react-router";
import { TiHome } from "react-icons/ti";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className="w-full min-h-screen bg-[#ff5200] font-sans pb-6">

        <div className="md:hidden w-full flex gap-2 items-center overflow-hidden px-4 h-15 bg-black">
            <img className="h-8 rounded-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqDecYNB4XzOS5TFHmIBXBgf_DMPzKttsmw&s"
            alt="logo"
          />
          <p className="text-white leading-none text-xs font-bold">Open in desktop and allow cors origin using cors-anywhere.herokuapp.com proxy</p>
          
          <a href="https://cors-anywhere.herokuapp.com/corsdemo" className="px-3 py-2.5 rounded-3xl text-white bg-[#ff5200] font-medium text-sm leading-none whitespace-nowrap">OPEN APP </a>
        </div>

      {/* NAVBAR */}
      <div className="flex md:w-[80%] md:mx-auto justify-between items-center py-6 px-4 md:px-16">

        {/* Mobile Icon */}
        <div className="md:hidden flex items-center gap-1 justify-center text-white">
          <TiHome size={30} />
          <span className="font-semibold text-xl">Home</span>
        </div>
        <div className="md:hidden text-white  rounded-full ">
          <RiAccountCircleFill size={40}/>
        </div>

        {/* Logo */}
        <div className="hidden md:block w-40 h-12">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-white text-base font-bold gap-8 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>
          <a className="border border-white py-3 px-4 rounded-2xl">
            Get the App
          </a>
          <a className="bg-black py-3 px-4 rounded-2xl">
            Sign in
          </a>
        </div>
      </div>

      {/* HERO */}
      <div className="relative md:pt-10 md:pb-8">

        {/* Side Images */}
        <img
          className="hidden md:block absolute left-0 top-10 w-[220px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />
        <img
          className="hidden md:block absolute right-0 top-10 w-[220px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />

        {/* TEXT */}
        <div className="md:hidden flex relative px-4 py-2">
            <input
            type="text"
            placeholder="Search for restaurant, item or more"
            className="bg-white text-xs px-4 py-4 font-semibold text-slate-600 w-full rounded-2xl outline-none"
            
          />
          <div className="font-bold absolute right-8 text-slate-500 top-5.5 text-2xl">
            {
                <IoSearchOutline size={20}/>
            }
          </div>
        </div>
        <div className=" text-white text-start md:text-center font-medium md:font-extrabold md:px-4 px-4 md:max-w-[60%] mx-auto text-lg md:text-5xl leading-tight">
            <div className="flex items-center">
          <span >
            Order food & groceries. Discover best restaurants. Swiggy it!
          </span>
          <img className="md:hidden object-cover w-50 h-30 "
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/19/ca322ced-2d4f-4a43-a8c6-b7e07de76bfa_DEmweb.png" alt="" />
            </div>

        </div>

        {/* INPUTS */}
        <div className="md:mt-8 flex flex-col md:flex-row gap-3 px-4 md:px-0 md:max-w-[50%] mx-auto">
          <input
            type="text"
            defaultValue="Delhi, India"
            className=" hidden md:block bg-white text-lg px-4 py-4 w-full md:w-[40%] rounded-2xl outline-none"
          />
          <input
            type="text"
            placeholder="Search for restaurant, item or more"
            className="hidden md:block bg-white text-lg px-4 py-4 w-full md:w-[60%] rounded-2xl outline-none"
          />
        </div>
      </div>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row  md:gap-4 px-4 md:px-16 mt-6">
        <Link to="/restaurant">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/25/4ad89473-2edb-4f6b-8092-979080ebdf13_Upto6010.png"
            className="md:hidden rounded-xl"
            alt=""
          />
        </Link>

        <Link to="/restaurant">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            className="hidden md:block rounded-xl"
            alt=""
          />
        </Link>
        <div className="flex">
        <a href="https://www.swiggy.com/instamart">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            className="rounded-xl"
            alt=""
          />
        </a>

        <a href="https://www.swiggy.com/dineout">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            className="rounded-xl"
            alt=""
          />
        </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="hidden md:block h-3 w-[80%] mx-auto bg-white mt-6 rounded"></div>

    </div>
  );
};

export default Header;