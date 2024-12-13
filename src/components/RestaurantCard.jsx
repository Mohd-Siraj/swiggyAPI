import { MDN_IMG_URL,  } from "../config";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import "../index.css";




const RestaurantCard = (props) => {

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
    const { cloudinaryImageId, name, avgRating, areaName, id } = props
    console.log("this is id", id)
    const truncated = truncateText(name, 20);
    // console.log(props.index)

    return (
      // <Link to="{/restaurant/ + {id}}">

      <div className="py-4 px-4 border-slate-700 shadow-2xl">
        <img
          className="object-fill rounded-lg"
          src={MDN_IMG_URL + cloudinaryImageId}
          width={"180rem"}
          // height={"100%"}
          alt="img"
        />
        <h3 className="font-bold" title={name}>
          {truncated}
        </h3>
        <p className="text-yellow-500">{avgRating}⭐</p>
        <h4>{areaName}</h4>
      </div>
      // </Link>
    );
  };

  export default RestaurantCard;