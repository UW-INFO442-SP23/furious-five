import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import NavBar from './components/NavBar/navbar.js'
import Home from './components/Home/home.js'
import Login from './components/Login/login.js'
import Posts from './components/Posts/posts.js'
import Form from './components/Form/form.js';


export default function App(props) {
    return (
      <div>
        <NavBar/>
        <Router>
          <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Login" element={<Login />} /> 
          </Routes>
        </Router> 
      </div>
    );
  }
  

