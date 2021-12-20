import React,{useEffect,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Buyticket from './components/pages/Buyticket/Buyticket';
import Movie from './components/pages/AllMovie/Movie';
import axios from "axios";
import DevPage from './components/pages/Dev/DevPage';
import Info from './components/pages/Information/Info';
import SelectedTime from './components/SelectedTime';
import Payment from './components/pages/Payment/Payment';

function App() {
  const [nameMovie, setNameMovie] = useState(null);
  const timeout = async (ms) => {
    return new Promise((res) => setTimeout(res, ms));
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/Detail/").then((res) => {
      setNameMovie(res.data);
    });
  }, []);
  if (!nameMovie) return "error";
  return (
    <div id="main">
    <Router>
      <Navbar />
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/Buyticket/:id" element={<Buyticket data={nameMovie}/>}/>  
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<Info data={nameMovie} />} />
        {/* <Route path="/selectdate/:id" element={<SelectedTime data={nameMovie}/>}/> */}
        <Route path="/dev" element={<DevPage />} />    
        <Route path="/purchase/:id/:tm/:da/:price" element={<Payment/>}/>
      </Routes>      
    </Router>
    </div>
  );
}

export default App;
