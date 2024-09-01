import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Container, Header, Button, ButtonText } from './components';
import About from './components/About';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="container">
      <Header>DriveWise</Header>
      <Button>
        <ButtonText>Get Started</ButtonText>
      </Button>
      <About />
    </div>
  </ThemeProvider>
);

export default App;