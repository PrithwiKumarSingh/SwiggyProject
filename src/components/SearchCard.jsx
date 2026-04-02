import React from 'react'
import { Link,useParams } from 'react-router'
import { useState, useEffect } from 'react'
import RestInfo from './RestInfo'
import MenuCard from './MenuCard'
import NavBar from './NavBar'
const SearchCard = (e) => {
    const [restData, setRestData] = useState([]); 
    const [search, setSearch] = useState("");
    console.log(search);


    const filteredItems = restData.filter((item) =>
            item?.card?.info?.name.toLowerCase().includes(search.toLowerCase())
    );


    const {id} = useParams();

        useEffect(() => {
        const fetchData = async () => {
          try {
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
            const response = await fetch(proxy + api);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            let allItems = [];
            let curr = []
            tempData.map((item)=> allItems.push(item?.card?.card?.itemCards));
            const finalData = allItems.filter(Boolean).flat();

            setRestData(finalData);

          } catch (err) {
            console.error("Error fetching data:", err);
          }
        };
    
        fetchData();
      }, []);






  return (
    <div>
        <NavBar/>
    <div className='w-[60%] mx-auto mt-20 '>
        <div className='relative'>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} className='w-full outline-none border-b text-2xl py-4 pl-12' placeholder='Search Here '></input>
        <Link to={`/city/delhi/${id}`}>
        <img className='h-8 absolute bottom-4 left-0' src="https://www.svgrepo.com/show/510041/left-arrow.svg" alt="" />
        </Link>
        <img className='h-8 absolute bottom-4 right-5 '  src="https://www.svgrepo.com/show/532555/search.svg" alt="" />
        </div>  

            <div >
                {
                filteredItems.map((menuItem,index)=><RestInfo key={index} restData={menuItem?.card?.info}></RestInfo>)
                }
            </div>
    </div>
    </div>
  )
}

export default SearchCard