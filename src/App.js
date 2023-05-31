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

  let postCards = [{name: "Example Restaurant", email: "contact@example.com",address: "123 4th Ave N, Shoreline, WA 98155", 
  cuisine: "Japanese cuisine", description: "Your inventory description", img: "https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/chick.jpg?raw=true", date: "Today"}]


    return (
      <div>
        <NavBar/>
        <Router>
          <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Forum" element={<Forum posts={postCards}/>} />
          {/* <Route path="/Form" element={<Form posts={postCards}/>} /> */}
          <Route path="/Form/viewposts" element={<ViewPosts />}/>
          <Route path="/Login" element={<Login />} />
          </Routes>
        </Router> 
        <Footer/>
      </div>
    );
  }
  

