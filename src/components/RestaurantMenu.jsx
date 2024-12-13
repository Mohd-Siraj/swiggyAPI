import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDN_IMG_URL } from "../config";

function RestaurantMenu() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  async function restaurantMenus() {
    // const response = await fetch(
    //   `{/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId= + ${id}}`
    // );
    const response = await fetch(
      `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}`
    );
    
    // ("/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229");

    const data = await response.json();
    setRestaurant(data);
    console.log("menu data", data);
  }

  // console.log("params", id)

  useEffect(() => {
    restaurantMenus();
  }, []);

  // console.log(JSON.stringify(restaurant, null, 2))
  // Object.values(restaurant)

  return (
    <>
      {/* {restaurant?.map((value, index) => { */}
        {/* return ( */}
          <div className="text-center">
            {/* {"Restaurant menu id:" +
              restaurant?.data?.cards[2]?.card?.card?.info?.name.id}
            <br /> */}
            {"Restaurant menu id:" +  id }
            <br />
            {restaurant?.data?.cards[2]?.card?.card?.info?.name}
            <br />
            {restaurant?.data?.cards[2]?.card?.card?.info?.city}
            <br />
            {restaurant?.data?.cards[2]?.card?.card?.info.labels[1].title} : {restaurant?.data?.cards[2]?.card?.card?.info.labels[1].message}
            <br />

            <img
              src={
                MDN_IMG_URL +
                restaurant?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
              }
              alt="menu items"
              style={{ width: "12rem", borderRadius: "0.5rem"}}
              className="p-1"
            />
          </div>
        {/* ); */}
      {/* })} */}
    </>
  );
}

export default RestaurantMenu;
