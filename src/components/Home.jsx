import { Button } from '@chakra-ui/react';
import React from 'react';
import '../App.css';
import '../styles/HeroSection.css';


function HeroSection() {
  return (
    <div id='home' className='hero-container'>
      <h1>Lokesh Kumar Bairwa</h1>
      <p>Full Stack Web Develper</p>
      <a href='#projects' className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          CONTACT ME
        </Button>
      </a>
    </div>
  )
}

export default HeroSection;
