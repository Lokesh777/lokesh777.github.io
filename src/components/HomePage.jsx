import { Button } from '@chakra-ui/react';
import '../App.css';
import '../styles/HeroSection.css';
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css/animate.min.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
      <div id='home' className='hero-container'>

        <h3>
          <div className={isVisible ? 'animate__animated animate__bounceInLeft' : ''}>
            Hi, I am Lokesh Kumar Bairwa
          </div>

        </h3>

        <h1>
          <div className={isVisible ? 'animate__animated animate__flip animate__delay-1s' : ''}>
            Full Stack Web Developer
          </div>

        </h1>

        <p>
          <div className={isVisible ? 'animate__animated animate__bounceInRight ' : ''}>
            
            An enthusiastic web developer with strong technical as well as communication skills and expertise in MERN stack.
          </div>

        </p>
        <br />
        <div className={isVisible ? 'animate__animated animate__zoomInUp animate__delay-2s ' : ''}>
          <a href='#contact' className='hero-btns'>
            <Button className='btns'>

              CONTACT ME

            </Button>
            
          </a>
        </div>

      </div>
    </ScrollTrigger>
  )
}

export default Home;