import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } 
// from "react-router-dom";
import Checkout from "./Checkout"

function App() {
  return (
    <Router>
    <div className="app">
       
      
      

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/Checkout" element={<><Header /> <Checkout/></>} />
          <Route exact path="/" element={<><Header/><Home/></>}/>
          {/* <Route path="/"  element={<Home />} /> */}
        </Routes>
        </div>
       </Router>
    
    
  )
}

export default App;

