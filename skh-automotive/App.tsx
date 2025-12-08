import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Facilities from './pages/Facilities';
import Quality from './pages/Quality';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;