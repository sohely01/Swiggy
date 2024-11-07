import { useEffect, useState } from "react";
import ResCard from "./ResCard";

// import Shimmer from "./Shimmer";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [ filteredRestaurant , setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");



  useEffect(()=>{
    fetchData();
  },[]);


  const fetchData = async () => { 
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json.data);

    // Optional Chaining 
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


   };


      // Conditional Rendering 
  //  if (ListOfRestaurant.length === 0) {
  //   return <Shimmer/>
    
  //  }
 
    // Also we can use     Ternory operator : = otherwise

    // ListOfRestaurant.length === 0 ?(
    //   <Shimmer/>
    // )  :
  return   (
    <div>
      <div className="container">
        <div className="search">
          <div className="col-md-12">
          <input
              type="search"
              placeholder="Search Here"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />   
                   <button
              onClick={() => {

                const FilterResname = ListOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurant(FilterResname);

              }}
            >
              Search
            </button>
            
                     <button
              onClick={() => {
                // Filter Logic

                const FilteredList = ListOfRestaurant.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(FilteredList);
              }}
           style={{marginLeft:'3%'}} >
              Top Rated Restaurant
            </button>
          </div>
        </div>
      </div>
      <div className="body_Section">
        <div className="container">
          <div className="row">
            <div className="res-container">
              {filteredRestaurant.map((restaurant, index) => (
                <div className="col-md-3" key={index}>
                  <ResCard resData={restaurant} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
