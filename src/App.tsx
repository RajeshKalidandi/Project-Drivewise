import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SampleComponent from './components/SampleComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<SampleComponent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
