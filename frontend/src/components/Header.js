import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const navBarStyle= {
  backgroundColor: 'lightblue'
}

const Header = ({title}) => {
    return (
        <Navbar style={navBarStyle} data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Header;