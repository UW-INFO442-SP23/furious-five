import React from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import Filterforum from './Filterforum';
// import Form from 'react-bootstrap/Form';
// import App from './App';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

export default function Forum(props) {
  return (
    <div class="form-container">

    <div className="formheader">
    <div className="container">
    <div class="p-2">
    <section className="post">
    <h1 className="post">Post Forum</h1>
    <h4 className="post">Come and view what food restaraunts are giving away! </h4>
    </section>
    </div>

    {/* <div className="container"> */}
      {/* <div class="border-bottom m-2"> */}
    <div class="row align-items-center my-3">

    <div class="nav-search col-4">
    <div class="col-auto">
  <div class="input-group rounded">
    <form class="form-inline my-2 my-lg-0">
      {/*
  <input type="search" class="form-control rounded mr-sm-2 col-20" 
          placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          */}
  </form>
  
</div>
</div>
</div>

  <div class="col-auto ">
      <select class="form-select rounded mr-sm-2 col-8">
        <option selected>Date</option>
        <option value="1">Today</option>
        <option value="2">Yesterday</option>
        <option value="3">2 days ago</option>
        <option value="4">1 week ago</option>
      </select>
      </div>
      <div class="col-auto">
      <select class="form-select rounded mr-sm-2 col-8">
        <option selected>Order by</option>
        <option value="1">A-Z</option>
        <option value="2">Z-A</option>
       {/*
        <option value="3">Italian cuisine</option>
        <option value="4">Thai cuisine</option>
        <option value="5">Japanese Cuisine</option>
        <option value="6">French cuisine</option>
        <option value="7">Mexican cuisine</option>
        <option value="8">Greek cuisine</option>
        <option value="9">Turkey Cuisine</option>
        <option value="10">Lebanese Cuisine</option>
        <option value="11">American cuisine</option>
       */}
      </select>
      </div>
      </div>
      {/* </div> */}



    <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="card-columns">

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
        <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>
    
    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src=".../100px200/" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <a href="#" class="btn btn-light">View</a>
      </div>
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    // </div>

    )

}
