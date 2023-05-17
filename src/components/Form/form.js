import React from "react";

function Form() {
  return (
    <div className="create-post-container">

      {/* Form */}
      <form>
        <label htmlFor="title">Restaurant Name:</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="email">Email Address:</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
        <label htmlFor="content">Cuisine:</label>
        <textarea id="content" name="content" rows="10" required></textarea>

        <label htmlFor="menu">Menu:</label>
        <input type="file" id="menu" name="menu" />

        <button type="submit">Post</button>
      </form>

    </div>
  );
}

export default Form;
