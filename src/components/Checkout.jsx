import React, { useState } from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { IncrementItems, DecrementItems } from "../Stores/CartSlicer";

const Checkout = () => {
    const items = useSelector(state => state.cartslice.items);
    
    const totalPrice = items.reduce((sum, item) => {
      return sum + (item.defaultPrice ? item?.defaultPrice/100 : item.price/100 || 0);
    }, 0);

    const [price, setPrice] = useState(totalPrice);

    const dispatch = useDispatch();
    const counter = useSelector(state => state.cartslice.count);


    function handleIncrementItems(item){   
        dispatch(IncrementItems(item));
        setPrice(price + (item.defaultPrice ? item.defaultPrice/100 : item.price/100));
    }
    function handleDecrementItems(item){
        dispatch(DecrementItems(item));
        setPrice(price - (item.defaultPrice ? item.defaultPrice/100 : item.price/100));
    }  
    
  return (
    <div className='w-full h-screen'>
      <NavBar></NavBar>

    {
      
    totalPrice == 0 ? 
    (<div className=' mt-5'>
        <div className='w-[80%] mx-auto h-fit flex flex-col items-center '>
          <img className='w-100 h-70 mt-35 ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
          <div className='text-center'>
            <p className='font-bold text-[#35383D] text-xl mt-8'>Your card is empty</p>
            <p className='text-sm my-2 text-slate-500 '>You can go to home page to view more restaurants</p>
            <Link to={"/restaurant"}>
            <button className='px-4 py-2 text-white bg-[#FF5200] my-4 cursor-pointer font-bold hover:shadow-lg hover:scale-101 transition ease-in-out'>SEE RESTAURANTS NEAR YOU</button>
            </Link>
          </div>
        </div>
    </div>)


    : (<div className='w-[80%] mx-auto my-10 '>

      <h2 className='text-3xl font-extrabold'>Your Cart</h2>

      <div className='flex gap-8 my-4'>
      {/* items */}
      <div className='w-[60%] h-[80%] rounded-lg overflow-hidden shadow-lg '>
        <h2 className='py-3 font-bold text-xl px4 w-full px-7 bg-[#E9ECEE] '>{`Cart Items(${counter}) `}</h2>

        
        <div className='h-140 overflow-y-scroll pb-5 px-6 scrollbar-hide'>
          { 

            items.map((item)=>{
              return(
              <div className=' flex border border-gray-100  mt-2 justify-between px-7 py-3 bg-gray-50 rounded-lg' key={item.id}>
                  <div >
                  <h2 className='font-bold text-lg'>{item.name}</h2>
                  <p className='text-base font-medium text-slate-500 my-2'>{` ₹${item.defaultPrice ? item.defaultPrice/100 : item.price/100}.00`}</p>
                  </div>
                  <div className=' flex gap-8 items-center'>
                    <div className=" rounded-xl shadow-sm text-green-600 bg-white py-0.5 px-2 font-bold text-xl">
                        <button onClick={()=>handleDecrementItems(item)}
                         className=" transform transition duration-100 hover:scale-110 font-bold text-2xl w-10 cursor-pointer ">-</button>
                        <span className="text-2xl w-10 text-center">{item.quantity}</span>
                        <button onClick={()=>handleIncrementItems(item)}
                         className=" transform transition duration-100 hover:scale-110 w-10 text-2xl cursor-pointer">+</button>
                    </div>
            <div>
              <p className='font-bold text-lg'>{` ₹${(item.defaultPrice ? item.defaultPrice/100 : item.price/100) * item.quantity}.00`}</p>
            </div>
                </div>
                
              </div>
            )})
          }
        </div>

      </div>

      {/* pricing of the items  */}
      <div className='w-[30%] h-fit bg-white rounded-2xl overflow-hidden px-7 shadow-lg'>
        <h2 className='py-3 font-bold text-xl w-full border-b-2'>Order Summary</h2>
        <div className='flex flex-col gap-2 my-2'>
          <div className='w-full flex justify-between'>
          <p className='font-medium text-sx text-gray-500'>{`Subtotal (${counter} items)`}</p>
          <p className='font-bold text-lg'>{`₹${price}.00`}</p>
          </div>
          <div className='w-full flex justify-between'>
          <p className='font-medium text-base text-gray-500'>Delivery Fee</p>
          <p className='font-bold text-lg text-green-500'> FREE</p>
          </div>
          <div className='w-full flex justify-between'>
          <p className='font-medium text-base text-gray-500'>GST & Restaurant Charges</p>
          <p className='font-bold text-lg'>₹17.58</p>
          </div>
        </div>
        <div className='flex justify-between border-t-2 items-center'>
          <h2 className='py-3 font-bold text-xl w-full '>Total Amount </h2>
          <p className='font-bold text-lg text-[#ff5200]'>{`₹${totalPrice==0 ? "0.00" : price+17.58}`}</p>
        </div>
        
        <button className='w-full bg-[#ff5200] font-bold text-base my-2 py-3 rounded-xl text-white cursor-pointer hover:text-gray-200'>Proceed to Payment</button>
          <Link to={"/restaurant"}>
        <div className='text-center pb-8 pt-2 flex items-center justify-center gap-3'>
          <FaArrowLeftLong className='text-[#ff5200] text-xs' size={15}/>
        <div className='text-base font-normal text-[#ff5200] hover:underline' href="/restaurant"> Add More Items</div>
        </div>
        </Link>

      </div>

      </div>


    </div>)




        }
    </div>
  )
}

export default Checkout