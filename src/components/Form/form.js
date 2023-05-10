import React from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import App from './App';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

export default class Form extends React.Component{
  state = {
    RestaurantName: "",
    EmailAddress: "",
    Address: "",
    Cuisine: "",
    Menu: ""

  };
  
  render() {
    return(
      <div className="form-container">
        <div className='small-form'>
      <form>
        <h2 className="form-title">Form</h2>
        <input type="text" className= "form-text" placeholder='Restaurant Name' value={this.state.RestaurantName} /> <br />
        <input type="text" className= "form-text" placeholder='Email Address' value={this.state.RestaurantName} /> <br />
        <input type="text" className= "form-text" placeholder='Address' value={this.state.RestaurantName} /> <br />
        <input type="text" className= "form-text" placeholder='Cuisine' value={this.state.RestaurantName} /> <br />
        <input type="text" className= "form-text" placeholder='Menu' value={this.state.RestaurantName} /> <br />
        <button>Submit</button>
      </form>
      </div>
      </div>
    )
  }
}
