import React, { useState } from "react";


function PostsCard(props) {

  const handleClick = function(event) {
    alert("This restarant has been notifed of your request. Please check your email for further details!")
  };

  let restaurant = props.posts;

  return (
    <div
    className="card"
    style={{ width: "18rem" }}
    key={restaurant.name}
  >
    <img
      className="card-img-top"
      src={restaurant.img}
      alt="Inventory"
    />
    <div className="card-body">
      <p className="card-text">{restaurant.name}</p>
      <p className="card-text">{restaurant.description}</p>
      <p className="card-text">{restaurant.cuisine}</p>
      <p className="card-text">{restaurant.email}</p>
      <p className="card-text">{restaurant.address}</p>
      <button onClick={handleClick} className="btn btn-light">
          Send Request
      </button>
    </div>
  </div>
  );
}

export default function Forum(props) {

  let list = props.posts.map((post) =>
    <PostsCard posts={post}  key={post.name}/>
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const [restaurants, setRestaurants] = useState(list);


  const changeName = (event) => {
    setName(event.target.value);
  }

  const changeEmail = (event) => {
    setEmail(event.target.value);
  }

  const changeAddress = (event) => {
    setAddress(event.target.value);
  }

  const changeCuisine = (event) => {
    setCuisine(event.target.value);
  }

  const changeDescription = (event) => {
    setDescription(event.target.value);
  }

  const changeDate = (event) => {
    setDate(event.target.value);
  }

  const changeImage = (event) => {
    const imgFile = event.target.files[0];
    setImg(URL.createObjectURL(imgFile));
  }

  function UpdateCards() {
    let newList = props.posts.map((post) =>
    <PostsCard posts={post}  key={post.name}/>
  );
    return newList
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    const formInfo = {
        name,
        email,
        address,
        cuisine,
        description,
        date,
        img
    }
    props.posts.push(formInfo);
    setRestaurants(<UpdateCards/>);
  };

  // const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  // const [date, setDate] = useState("");
  // const [cuisineFilter, setCuisineFilter] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value.toLowerCase());
  //   filterRestaurants(e.target.value.toLowerCase(), date, cuisineFilter);
  // };

  // const filterRestaurants = (query, selectedDate, selectedCuisine) => {
  //   const filtered = restaurants.filter((restaurant) => {
  //     const nameMatch = restaurant.name.toLowerCase().includes(query);
  //     const dateMatch = !selectedDate || restaurant.date === selectedDate;
  //     const cuisineMatch =
  //       !selectedCuisine || restaurant.cuisine === selectedCuisine;

  //     return nameMatch && dateMatch && cuisineMatch;
  //   });

  //   setRestaurants(filtered);
  // };

  // const handleDateChange = (e) => {
  //   const selectedDate = e.target.value;
  //   setDate(selectedDate);
  //   filterRestaurants(searchQuery, selectedDate, cuisineFilter);
  // };

  // const handleCuisineChange = (e) => {
  //   const selectedCuisine = e.target.value;
  //   setCuisineFilter(selectedCuisine);
  //   filterRestaurants(searchQuery, date, selectedCuisine);
  // };


  return (
    <div className="form-container">
        <section className="forum">
          <h1 className="forum">COMMUNITY</h1>
          <p className="forum">Explore the forum and create posts.</p>
         </section>
    
      {/* <div className="form-header">
        <div className="title-container">
          <h1>Post Forum</h1>
          <h4>Come and view what food restaurants are giving away!</h4>
        </div>
        <div className="filter-container">
          <div className="nav-search">
            <div className="col-auto">
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded mr-sm-2 col-20"
                  placeholder="Search restaurant"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={handleSearch}
                />
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
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="card-columns"> */}
        <div className="title-container">
          <h1>Post Forum</h1>
          <h4>Come and view what food restaurants are giving away!</h4>
        </div>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="card-columns">
            {restaurants}     
         </div>
        </div>
      </div>

      <div className="create-post-container">
      <h2>Create A Post</h2>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Restaurant Name:</label>
        <input type="text" id="title" name="title" required onChange={changeName}/>
        <label htmlFor="address">Food Date (MM/DD/YYYY:</label>
        <input type="text" id="address" name="address" required onChange={changeDate}/>
        <label htmlFor="email">Email Address:</label>
        <input type="text" id="email" name="email" required onChange={changeEmail}/>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required onChange={changeAddress}/>
        <label htmlFor="address">Cuisine (example: Japanese cuisine):</label>
        <input type="text" id="address" name="address" required onChange={changeCuisine}/>
        <label htmlFor="content">Description:</label>
        <textarea id="content" name="content" rows="10" required onChange={changeDescription}></textarea>

        <label htmlFor="menu">Menu:</label>
        <input type="file" id="menu" name="menu" onChange={changeImage}/>

        <button type="submit">Post</button>
      </form>

    </div>
    </div>
  );
}