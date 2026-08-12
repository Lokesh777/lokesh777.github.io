import { Button } from '@chakra-ui/react';
import '../App.css';
import '../styles/HeroSection.css';
import React, { useEffect, useState } from 'react';

const ROLES = [
  'Full Stack Developer (MERN)',
  'Frontend Developer',
  'React & Next.js Engineer',
];

function TypewriterRole({ words, typingSpeed = 70, pause = 1800 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === '';

    let delay = deleting ? typingSpeed / 1.6 : typingSpeed;
    if (doneTyping) delay = pause;
    if (doneDeleting) delay = 400;

    const timer = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typingSpeed, pause]);

  return (
    <p className='hero-role' aria-live='polite'>
      <span className='hero-role-text'>{text}</span>
      <span className='hero-cursor' aria-hidden='true' />
    </p>
  );
}

function Home() {
  return (
    <div id='home' className='hero-container'>
      <div className='hero-content'>
        <p className='hero-greeting'>Hi, I&apos;m</p>

        <h1 className='hero-title'>Lokesh Kumar Bairwa</h1>

        <TypewriterRole words={ROLES} />

        <p className='hero-tagline'>
          Building clean, high-performance web experiences — from pixel-perfect
          interfaces to AI-powered backends.
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
    </div>
  );
}

export default Home;
