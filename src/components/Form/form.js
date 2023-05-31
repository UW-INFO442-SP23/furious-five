import React, { useState } from "react";

function Form() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [cuisine, setCuisine] = useState("");
const [description, setDescription] = useState("");
const [date, setDate] = useState("");
const [img, setImg] = useState("");
const [posts, setPosts] = useState("");

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
  posts.push(formInfo);
  setPosts(posts);
};

  return (
    <div className="create-post-container">
      <h2>Create A Post</h2>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Restaurant Name:</label>
        <input type="text" id="title" name="title" required onChange={changeName}/>
        <label htmlFor="email">Email Address:</label>
        <input type="text" id="email" name="email" required onChange={changeEmail}/>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required onChange={changeAddress}/>
        <label htmlFor="address">Cuisine:</label>
        <input type="text" id="address" name="address" required onChange={changeCuisine}/>
        <label htmlFor="content">Description:</label>
        <textarea id="content" name="content" rows="10" required onChange={changeDescription}></textarea>

        <label htmlFor="menu">Menu:</label>
        <input type="file" id="menu" name="menu" onChange={changeImage}/>

        <button type="submit">Post</button>
      </form>

    </div>
  );
}

export default Form;