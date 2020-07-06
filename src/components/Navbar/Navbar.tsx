import './Navbar.css';
import React from 'react';
import { Navbar } from 'react-bootstrap';

export const TopNavbar = () => {
  return (
    <div>
      <Navbar className='topNav' variant='dark'>
        <Navbar.Brand href='#home'>Galileo</Navbar.Brand>
        <Navbar.Text>Add Providers</Navbar.Text>
      </Navbar>
    </div>
  );
};
