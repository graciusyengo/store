
import React from 'react';
import './App.css';

import Layout from "./components/Layout/Layout";
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />   {/* Route par défaut */}
   
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
