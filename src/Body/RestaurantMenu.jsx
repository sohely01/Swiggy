import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.9319821&lng=77.7523039&restaurantId=111322&submitAction=E"
    );
    const json = await data.json;
    console.log(json);
  };

  return (
    <div>
      <div className="container">
        <div className="col-md-8">
          <div className="menu">
            <h1>Name of the restaurants</h1>

            <h2>Menu</h2>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>Biryani</li>
              <li>Kabab</li>

              <li>Cold coffee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
