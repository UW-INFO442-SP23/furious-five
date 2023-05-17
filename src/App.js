import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import NavBar from './components/NavBar/navbar.js'
import Home from './components/Home/home.js'
import Login from './components/Login/login.js'
import Forum from './components/Forum/forum.js'
import ViewPosts from './components/Form/viewposts.js'
import Form from './components/Form/form.js';
import Footer from './components/Footer/footer.js'

export default function App(props) {
    return (
      <div>
        <NavBar/>
        <Router>
          <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Form/viewposts" element={<ViewPosts />}/>
          <Route path="/Login" element={<Login />} />
          </Routes>
        </Router> 
        <Footer/>
      </div>
    );
  }
  

