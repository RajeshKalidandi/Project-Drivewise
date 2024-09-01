import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Container, Header, Button, ButtonText } from './components';

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header>DriveWise</Header>
      <Button>
        <ButtonText>Get Started</ButtonText>
      </Button>
    </Container>
  </ThemeProvider>
);

export default App;