import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </nav>
    );
};

export default Navigation;