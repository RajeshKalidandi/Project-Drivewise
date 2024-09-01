import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SampleComponent from './components/SampleComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navigation />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/" element={<SampleComponent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
