import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const [ListOfRestaurant, setListOfRestaurant] = useState([]);


  return (
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
                console.log(searchText);
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
                setListOfRestaurant(FilteredList);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
