import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
