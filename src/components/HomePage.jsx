import { Button } from '@chakra-ui/react';
import '../App.css';
import '../styles/HeroSection.css';
import React from 'react';

function Home() {
  return (
    <div id='home' className='hero-container'>

      <h3 className='hero-title'>
        Hi, I am Lokesh Kumar Bairwa
      </h3>

      <img
        className='typing-svg'
        src='https://readme-typing-svg.demolab.com?font=IBM+Plex+Sans&color=%23ffffff&cursor=%23ffffff&size=38&center=true&vCenter=true&width=700&lines=Welcome+to+my+Portfolio!;I%27m+a+Full+Stack+Web+Developer+(MERN).;I%27m+a+Frontend+Developer.'
        alt='Typing animation'
      />

      <p className='hero-subtitle'>
        React.js · Next.js · Node.js · TypeScript · AI Integrations
      </p>

      <p className='hero-tagline'>
        Building clean, high-performance web experiences — from pixel-perfect interfaces to AI-powered backends.
      </p>

      <div className='hero-cta'>
        <a href='#contact'>
          <Button
            className='btn-primary'
            bg='#ffffff'
            color='#15153a'
            _hover={{ bg: '#efe8ff', transform: 'translateY(-2px)' }}
          >
            CONTACT ME
          </Button>
        </a>
        <a href='#projects'>
          <Button
            className='btn-outline'
            variant='outline'
            bg='transparent'
            color='#ffffff'
            borderColor='#ffffff'
            _hover={{ bg: '#ffffff', color: '#15153a', transform: 'translateY(-2px)' }}
          >
            VIEW MY WORK
          </Button>
        </a>
      </div>

    </div>
  )
}

export default Home;
