import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={SampleComponent} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
