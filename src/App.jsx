import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import header from './components/Header';
import myskill from './components/MySkill';
import about from './components/About';
import portfolio from './components/Portfolio';
import testimonial from './components/Testimonial';
import contactme from './components/ContactMe';
import Footer from './components/Footer';
import home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-skill" element={<MySkill />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
