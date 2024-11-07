/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/Constant";
import { addItem } from "../Utils/cartSlice";


const ResCard = (Props) => {


    const {resData} = Props;

const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo} = resData?.info

  const dispatch = useDispatch();

const HandleAddbutton = ()=>{
    dispatch(addItem(""))

}
 
      
  return (
    <div>
       <div className="res-card">   
        <img className="resImg" src={CDN_URL+cloudinaryImageId} alt="" />
        <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
        <h4> {avgRatingString}stars </h4>
        <h4> {costForTwo} </h4>
        <button style={{backgroundColor:'green', color:'white', borderRadius:'10px',padding:'10px', marginBottom:'10px'}} onClick={HandleAddbutton}>Add items</button>
                </div>

        

            </div>
  )
}

export default ResCard
