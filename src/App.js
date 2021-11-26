import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Buyticket from './components/pages/Buyticket/Buyticket';
import MovieimgNow from './components/movieDataNow';

function App() {
  return (
    <div id="main">
    <Router>
      <Navbar />
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/Buyticket/:id" element={<Buyticket data={MovieimgNow}/>}/>      
      </Routes>      
    </Router>
    </div>
  );
}

export default App;
