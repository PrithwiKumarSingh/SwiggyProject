import MenuCard from '../components/MenuCard'
import { Link, useParams } from 'react-router'
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMenu} from "../Stores/restaurantSlice"


const ResturantMenu = () => {
      const[selected, setSelected] = useState(null);

      const { id } = useParams();
      const dispatch = useDispatch();

      const menu = useSelector((state) => state.restaurant.menuById[id]) || [];
      // const status = useSelector((state) => state.restaurant.menuStatus[id]);

      useEffect(() => {
        if (!menu.length) {
          dispatch(fetchMenu(id));
        }
      }, [id, menu.length, dispatch]);
      
        

  return (
    <div>
      <NavBar/>
      <div className='w-[60%] mx-auto'>

        <Link to={`/city/delhi/${id}/search`}>
        <div className='relative'>
          <p className='py-4 w-full text-2xl font-normal rounded-2xl text-center bg-gray-300 mt-20 mb-10' >Search Here</p>
          <img className='absolute right-9 bottom-5 h-6' src="https://www.svgrepo.com/show/532555/search.svg" alt="" />
        </div>
        </Link>
        <div className='mt-4 mb-4 '>
          <button className={`px-8 py-3 mr-4 rounded-xl ${selected==="Veg" ? "bg-green-600 text-white" : "bg-gray-300"}`} onClick={()=> setSelected(selected==="Veg" ? null : "Veg")} >Veg</button>
          <button className={`px-4 py-3 rounded-xl ${selected==="non-Veg" ? "bg-red-600 text-white" : "bg-gray-300"}`} onClick={()=> setSelected(selected==="non-Veg" ? null : "non-Veg")}>non Veg</button>
        </div>
    <div >
        {
          menu.map((menuItem)=><MenuCard key={menuItem?.card?.card?.title} foodselect={selected} menuItem={menuItem?.card?.card}></MenuCard>)
        }
    </div>
    </div>
    </div>
  )
}

export default ResturantMenu