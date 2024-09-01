import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import io from 'socket.io-client';
import theme from './theme';
import { Container, Header, Button, ButtonText } from './components';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Booking from './components/Booking';
import ManageSlots from './components/ManageSlots';
import Map from './components/Map';

const socket = io('http://localhost:4000');

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'client' or 'instructor'
  const [slots, setSlots] = useState([]);
  const [locations, setLocations] = useState([
    { id: 1, lat: -3.745, lng: -38.523 },
    // Add more locations as needed
  ]);

  useEffect(() => {
    socket.on('slots', (slots) => {
      setSlots(slots);
    });

    return () => {
      socket.off('slots');
    };
  }, []);

  const handleLogin = (email, password) => {
    // Handle login logic here
    setIsLoggedIn(true);
    setUserRole('client'); // Example role
  };

  const handleRegister = (email, password, role) => {
    // Handle registration logic here
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleBook = (slot) => {
    // Handle booking logic here
    console.log('Booked slot:', slot);
  };

  const handleAddSlot = (time) => {
    const newSlot = { id: Date.now().toString(), time };
    socket.emit('addSlot', newSlot);
  };

  const handleRemoveSlot = (id) => {
    socket.emit('removeSlot', id);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Header>DriveWise</Header>
        {!isLoggedIn ? (
          <>
            <Login onLogin={handleLogin} />
            <Register onRegister={handleRegister} />
          </>
        ) : userRole === 'client' ? (
          <Booking slots={slots} onBook={handleBook} />
        ) : (
          <ManageSlots slots={slots} onAddSlot={handleAddSlot} onRemoveSlot={handleRemoveSlot} />
        )}
        <Map locations={locations} />
        <About />
      </div>
    </ThemeProvider>
  );
};

export default App;