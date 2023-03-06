import { Button } from '@chakra-ui/react';
import React from 'react';
import '../App.css';
import '../styles/HeroSection.css';


function Home() {
  return (
    <div id='home' className='hero-container'>
       <h3>Hi, I am Lokesh Kumar Bairwa</h3>
      <h1>Full Stack Web Developer</h1>
      {/* <h2>Full Stack Web Develper</h2> */}
      <p>An enthusiastic web developer with strong technical as well as communication skills and expertise in MERN stack.</p>
      <a href='#contact' className='hero-btns'>
        <Button className='btns'
        //  buttonStyle='btn--outline' 
        //  buttonSize='btn--large' 
         
         >
          CONTACT ME
        </Button>
      </a>
    </div>
  )
}

export default Home;