import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Home from './components/pages/HomePage/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div id="main">
    <Router>
      <Navbar />
      <Routes>      
        <Route path="/" element={<Home />} />
      </Routes>      
    </Router>
    </div>
  );
}

export default App;
