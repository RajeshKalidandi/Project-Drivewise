import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SampleComponent from './components/SampleComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={SampleComponent} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
