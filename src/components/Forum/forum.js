import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
// import Filterforum from './Filterforum';
// import Form from 'react-bootstrap/Form';
// import App from './App';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";



const restaraunts = [
  {
    name: "chick fill a ",
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
  {
    name: "McDonald",
    email: "",
    address: "",
    cuisine: "Thai cuisine",
    description: "fake description",
    date: "1 week ago",
  },
  {
    name: "McDonald",
    email: "",
    address: "",
    cuisine: "Thai cuisine",
    description: "fake description",
    date: "2 days ago",
  }
]

const compareDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) {
    console.log(`${d1} is less than ${d2}`);
  } else if (date1 > date2) {
    console.log(`${d1} is greater than ${d2}`);
  } else {
    console.log(`Both dates are equal`);
  }
};

let dates = ["Today", "Yesterday", "2 days ago", "1 week ago"];


export default function Forum(props) {
  const [filteredResturaunts, setFilteredResturaunts]  = useState(restaraunts);
  const [date, setDate] = useState();
  const [cousineFilter, setCuisineFilter] = useState();
 


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



      <select class="form-select rounded mr-sm-2 col-10" onChange={(e) => setDate(e.target.value)}>
      <option selected value="">Date</option>
        <option value="Today">Today</option>
        <option value="Yesterday">Yesterday</option>
        <option value="2 days ago">2 days ago</option>
        <option value="1 week ago"> 1 week ago</option>
      </select>
      </div>
      <div class="col-auto">
      <select class="form-select rounded mr-sm-2 col-10"  onChange={(e) => setCuisineFilter(e.target.value)}>
        <option selected value="">Cuisine</option>
       
        <option value={"Italian cuisine"}>Italian cuisine</option>
        <option value="Thai cuisine">Thai cuisine</option>
        <option value="Japanese Cuisine">Japanese Cuisine</option>
        <option value="French cuisine">French cuisine</option>
        <option value="Mexican cuisine">Mexican cuisine</option>
        <option value="Greek cuisine">Greek cuisine</option>
        <option value="Turkey Cuisine">Turkey Cuisine</option>
        <option value="10">Lebanese Cuisine</option>
        <option value="11">American cuisine</option>
      
      </select>
      </div>
      </div>



    <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="card-columns">

      {filteredResturaunts
      .filter(( restaraunt) => {
        console.log(dates.indexOf(restaraunt.date), dates.indexOf(date));

          let cousineMatch = !cousineFilter ||  restaraunt.cuisine.toLowerCase() == cousineFilter.toLowerCase();
          let dateMatch = !date || dates.indexOf(restaraunt.date) <= dates.indexOf(date);

        return cousineMatch && dateMatch;
      })
      .map(( restaraunt) => (
        <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
        <div class="card-body">
          <p class="card-text"> {restaraunt.name} </p>
          <p class="card-text"> {restaraunt.description} </p>
          <p class="card-text"> {restaraunt.cuisine} </p>
          <Link to="../Form/viewposts" class="btn btn-light">View</Link>
        </div>
      </div>
      ))}
    

{/* 
    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
        <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div>
    
    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div>

    <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true" alt="PHOTO" />
      <div class="card-body">
      <p class="card-text">Description</p>
        <Link to="../Form/viewposts" class="btn btn-light">View</Link>
      </div>
    </div> */}

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    )

}
