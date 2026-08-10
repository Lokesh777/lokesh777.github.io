import { Button } from '@chakra-ui/react';
import '../App.css';
import '../styles/HeroSection.css';
import React from 'react';

function Home() {
  return (
      <div id='home' className='hero-container'>

        <h3>
          <div>
            Hi, I am Lokesh Kumar Bairwa
          </div>

        </h3>

        <h1>
          <div>
            Full Stack Web Developer
          </div>

        </h1>

        <p>
          <div>
            
            An enthusiastic web developer with strong technical as well as communication skills and expertise in MERN stack.
          </div>

        </p>
        <br />
        <div>
          <a href='#contact' className='hero-btns'>
            <Button className='btns'>

              CONTACT ME

            </Button>
            
          </a>
        </div>

      </div>
  )
}

export default Home;