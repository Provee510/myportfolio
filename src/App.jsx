import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import MySkill from './components/MySkill';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myskill" element={<MySkill />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
