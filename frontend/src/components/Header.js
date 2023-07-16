import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../images/logo.svg';

const navBarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navBarStyle} data-bs-theme="light">
      <Container>
        <Logo
          alt={title}
          style={{ maxWidth: '12rem', maxHeight: '2rem' }}
        ></Logo>
      </Container>
    </Navbar>
  );
};

export default Header;
