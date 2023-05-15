import React, { useState } from 'react';

export default function Filterform(props){
return(

 <div class="border-bottom m-2">
  {/* <div class="row align-items-center my-3"> */}
  <div class="d-flex justify-content-between">

  <nav class="navbar navbar-light bg-light">
  <form class="form-inline d-flex">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

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
)

}
