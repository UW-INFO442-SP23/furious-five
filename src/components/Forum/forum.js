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

  return (
    <div className="form-container">
        <section className="forum">
          <h1 className="forum">COMMUNITY</h1>
          <p className="forum">Explore the forum and create posts.</p>
         </section>
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

        <label htmlFor="menu">Image of food:</label>
        <input type="file" id="menu" name="menu" onChange={changeImage} required/>

        <button type="submit">Post</button>
      </form>

    </div>
    </div>
  );
}