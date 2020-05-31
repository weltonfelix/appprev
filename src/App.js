import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './styles/global.css';
import Routes from './routes';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container>
  );
}

export default App;
