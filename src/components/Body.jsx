import React, { useEffect, useState } from "react";
import "../index.css";
import { MDN_IMG_URL, restaurants } from "../config";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const cors = require("cors");
// Body.use(cors())

function Body() {
  // const [truefalse, setTrueFalse] = useState("true")
  const [dish, setDish] = useState("");
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState(false);

  const checkOnline = useOnline();

  // function searchDish(dish, restaurantsData) {
  //   return restaurantsData.filter((value) =>
  //     value.info.name.toLowerCase().includes(dish.toLowerCase())
  //   );
  // }

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
 
    const response = await fetch(
      // "/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();
    console.log(json);
    
    setRestaurantsData(
      // json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
      json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants
    ); // const onSearchDataChange = async (e) => {
    setFilteredData(
      // json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    ); // const onSearchDataChange = async (e) => {
  }

   

  function handleOnChange(e) {

    
  
    const currentValue = e.target.value;
    setDish(currentValue);
    console.log(dish);
    const filterData = restaurantsData.filter((value) =>
      value.info.name.toLowerCase().includes(currentValue.toLowerCase())
    );

    setFilteredData(filterData); // const onSearchDataChange = async (e) => {
  }
  //   debugger;
  //   const currentValue = e.target.value;
  //   setDish(currentValue);
  //   console.log(dish);
  //   const filterData = await restaurantsData.filter((value) =>
  //     value.info.name.toLowerCase().includes(currentValue.toLowerCase())
  //   );
  //   console.log(filterData);
  //   setRestaurantsData(filterData);
  // }; // const onSearchDataChange = async (e) => {
  //   debugger;
  //   const currentValue = e.target.value;
  //   setDish(currentValue);
  //   console.log(dish);
  //   const filterData = await restaurantsData.filter((value) =>
  //     value.info.name.toLowerCase().includes(currentValue.toLowerCase())
  //   );
  //   console.log(filterData);
  //   setRestaurantsData(filterData);
  // };

  // }
  // const [selectedData, setSelectedData] = useState({})
  // setSelectedData(restaurant);

const online = useOnline();
if(!online) return <h1> Offline</h1>

  return (
    <div>
      {/* ((filteredData.length) == 0 ? <Shimmer/> : ( */}
      <div className="py-2 px-3 bg-pink-300 ">
        <input
          placeholder="Search"
          type="text"
          className="px-2 rounded-xl focus:bg-pink-100 focus:outline-none"
          value={dish}
          onChange={(e) => handleOnChange(e)}
        />
        {/* <button>
       onClick={(e) => }
     const data = searchDish(dish, restaurantsData);
        
         setRestaurantsData(data);
        
        Search
      </button> */}
      </div>

      {/* <div className={dish.length ? "returnCardRight" : "returnCard"}> */}
      <div className="flex flex-wrap py-6 px-6">
        {filteredData.length == 0 ? (
          <h1>no restaurant</h1>
        ) : (
          filteredData.map((restaurant, i) => {
            // debugger
            return (
              <div key={restaurant.info.id}>
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}

                  // className="cardText"
                >
                  <RestaurantCard {...restaurant.info} index={i} />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Body;
