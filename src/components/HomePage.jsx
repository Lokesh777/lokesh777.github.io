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

        <img
          className='typing-svg'
          src='https://readme-typing-svg.demolab.com?font=IBM+Plex+Sans&color=%23ffffff&cursor=%23ffffff&size=38&center=true&vCenter=true&width=700&lines=Welcome+to+my+Portfolio!;I%27m+a+Full+Stack+Web+Developer+(MERN).;I%27m+a+Frontend+Developer.'
          alt='Typing animation'
        />

        <p>
          <div>
            React.js · Next.js · Node.js · TypeScript · AI Integrations
          </div>
        </p>

        <p>
          <div>
            Building clean, high-performance web experiences — from pixel-perfect interfaces to AI-powered backends.
          </div>

        </p>
        <br />
        <div className='hero-cta'>
          <a href='#contact' className='hero-btns'>
            <Button className='btns'>

              CONTACT ME

            </Button>
            
          </a>

          <a href='#projects' className='hero-btns'>
            <Button className='btns btns-outline'>

              VIEW MY WORK

            </Button>
            
          </a>
        </div>

      </div>
  )
}

export default Home;