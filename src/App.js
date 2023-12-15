import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title></title>
          <title>Resume Maker  - 75D6</title>
                <meta name="description" content="Make your resume to showcase your skills and achievments and land to your desired Job" />
                <meta name="keywords" content="resume , resumeai, airesume , onlineresume , onlinecv , cvmaker , jobcv, intromaker , jobfinder" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Rohit Lodhi" />
                
                
        </Helmet>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
