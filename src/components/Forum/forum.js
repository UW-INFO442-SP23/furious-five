import React, { useState } from "react";
import { Link } from "react-router-dom";

const restaurants = [
  {
    name: "chick fill a",
    email: "",
    address: "",
    cuisine: "Italian cuisine",
    description: "fake description",
    date: "Today",
  },
  {
    name: "McDonald",
    email: "",
    address: "",
    cuisine: "Thai cuisine",
    description: "fake description",
    date: "Yesterday",
  },
  // Rest of the restaurant data...
];

export default function Forum(props) {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [date, setDate] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    filterRestaurants(e.target.value.toLowerCase(), date, cuisineFilter);
  };

  const filterRestaurants = (query, selectedDate, selectedCuisine) => {
    const filtered = restaurants.filter((restaurant) => {
      const nameMatch = restaurant.name.toLowerCase().includes(query);
      const dateMatch = !selectedDate || restaurant.date === selectedDate;
      const cuisineMatch =
        !selectedCuisine || restaurant.cuisine === selectedCuisine;

      return nameMatch && dateMatch && cuisineMatch;
    });

    setFilteredRestaurants(filtered);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    filterRestaurants(searchQuery, selectedDate, cuisineFilter);
  };

  const handleCuisineChange = (e) => {
    const selectedCuisine = e.target.value;
    setCuisineFilter(selectedCuisine);
    filterRestaurants(searchQuery, date, selectedCuisine);
  };

  return (
    <div className="form-container">
      <div className="formheader">
        {/* Rest of the header code... */}
        <div className="container">
    <div class="p-2">
    <section className="post">
    <h1 className="post">Post Forum</h1>
    <h4 className="post">Come and view what food restaraunts are giving away! </h4>
    </section>
    </div>
        <div className="row align-items-center my-3">
          <div className="nav-search col-4">
            <div className="col-auto">
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded mr-sm-2 col-20"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>

          <div className="col-auto">
            <select
              className="form-select rounded mr-sm-2 col-10"
              onChange={handleDateChange}
              value={date}
            >
              <option value="">Date</option>
              <option value="Today">Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="2 days ago">2 days ago</option>
              <option value="1 week ago">1 week ago</option>
            </select>
          </div>

          <div className="col-auto">
            <select
              className="form-select rounded mr-sm-2 col-10"
              onChange={handleCuisineChange}
              value={cuisineFilter}
            >
              <option value="">Cuisine</option>
              <option value="Italian cuisine">Italian cuisine</option>
              <option value="Thai cuisine">Thai cuisine</option>
              <option value="Japanese Cuisine">Japanese Cuisine</option>
              <option value="French cuisine">French cuisine</option>
              <option value="Mexican cuisine">Mexican cuisine</option>
              <option value="Greek cuisine">Greek cuisine</option>
              <option value="Turkey Cuisine">Turkey Cuisine</option>
              <option value="Lebanese Cuisine">Lebanese Cuisine</option>
              <option value="American cuisine">American cuisine</option>
            </select>
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="card-columns">
              {filteredRestaurants.map((restaurant) => (
                <div
                  className="card"
                  style={{ width: "18rem" }}
                  key={restaurant.name}
                >
                  <img
                    className="card-img-top"
                    src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true"
                    alt="PHOTO"
                  />
                  <div className="card-body">
                    <p className="card-text">{restaurant.name}</p>
                    <p className="card-text">{restaurant.description}</p>
                    <p className="card-text">{restaurant.cuisine}</p>
                    <Link to="../Form/viewposts" className="btn btn-light">
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
