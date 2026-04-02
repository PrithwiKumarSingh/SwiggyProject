import { useState } from "react";
import { addItems, IncrementItems, DecrementItems } from "../Stores/CartSlicer";
import { useDispatch } from "react-redux";


const RestInfo = ({restData}) => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    function handleAddItems(){
        setCount(1);
        dispatch(addItems(restData));
    }

    function handleIncrementItems(){
        setCount(count + 1);    
        dispatch(IncrementItems(restData));
    }
    function handleDecrementItems(){
        setCount(count-1);
        dispatch(DecrementItems(restData));
    }  

  return (
    <div>
    <div className="flex w-full justify-between mt-8">
        <div className="w-[70%]">
            <p className="text-2xl mb-1 font-semibold  text-gray-700" >{restData?.name}</p>
            <p className="text-xl font-semibold mb-2 ">{"₹"+("defaultPrice"+ restData ? restData?.defaultPrice/100 : restData?.price/100)}</p>
            <div className="flex gap-1">
                   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.83 1.476 8.303L12 18.896l-7.412 4.543 1.476-8.303L0 9.306l8.332-1.151z" />
                </svg>
            <span className="text-green-700 mb-1">{restData?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2 +")"}</span>
            </div>
            <p>{restData.description}</p>
        </div>
        <div className="w-[20%] h-40 flex items-center  relative"> 
                <img className="w-full h-36 object-cover rounded-2xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId} alt="" />

                <div>
                    {
                    (count==0) ? (<button className=" transform transition cursor-pointer duration-200 hover:bg-gray-200 mt-10 absolute bottom-0 rounded-xl shadow-sm text-green-600 bg-white font-bold md:left-15 py-2 px-10" onClick={()=>handleAddItems()}>Add</button>)
                     : (
                        <div className="transform transition cursor-pointer duration-200 hover:bg-gray-200 mt-10 absolute bottom-0 rounded-xl shadow-sm text-green-600 bg-white left-15 py-1 px-2 flex items-center font-bold text-xl">
                            <button className="font-bold text-2xl w-8 cursor-pointer" onClick={()=> handleDecrementItems()}>-</button>
                            <span className="text-2xl w-8 text-center">{count}</span>
                            <button className=" w-8 text-2xl cursor-pointer" onClick={()=> handleIncrementItems()}>+</button>
                        </div>
                     )
                    }
                </div>
                
            </div>
    </div>
        <hr className="mt-3 mb-6 "></hr> 
    </div> 
  )
}

export default RestInfo