import Button from './Button';
import styled from './App.module.css';
import Home from './routes/Home';
import Details from './routes/Details';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
