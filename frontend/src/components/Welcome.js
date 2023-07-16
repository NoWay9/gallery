import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Welcome = () => (
  <Container className="mt-4">
    <h1>Images Gallery</h1>
    <p>
      <Button variant="primary" href="hhtps://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Container>
);

export default Welcome;
