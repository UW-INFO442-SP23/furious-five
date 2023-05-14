import React from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import Filterform from './Filterform';
// import Form from 'react-bootstrap/Form';
// import App from './App';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

export default function Form(props) {
  return (

    <div className="formheader">
    <div className="container">
    <div class="p-2">
    <section className="post">
    <h1 className="post">Post Forum</h1>
    <h4 className="post">Come and view what food restaraunts are giving away! </h4>
    </section>
    </div>

    <div className="container">
    <div class="align-items-start p-2">
  <div class="my-3">

  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>

  <div class="col-auto">
      <select class="form-select">
        <option value>Date</option>
      </select>
      </div>
      <div class="col-auto">
      <select class="form-select">
        <option value>Cuisine</option>
      </select>
      </div>
</nav>

</div>
</div> 


    <div class="container">
    <div class="row d-flex p-2">
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

    )

}
