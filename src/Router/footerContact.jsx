
import React from 'react';
import { Link } from '@chakra-ui/react'
import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr";
// import { Link } from 'react-router-dom';
// import { Button } from './Button';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section id='contact'>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>CONTACT ME</h2>
                            <p className='email'>lokeshdevgan777@gmail.com</p>
                           
                        </div>
                    </div>
                </div>
            </section>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <p className='social-logo'>
                            Nice to meet you!
                        </p>
                    </div>
                    <div className='social-icons'>
                       <Link    className='social-icon-link github' href='https://github.com/Lokesh777' isExternal >
                            <GrGithub size='40' />
                        </Link>
                        
                        <Link  className='social-icon-link twitter' href='https://twitter.com/lkdevgan777?t=DA9GwpQHbc-SCMDAgdKn0Q&s=09' isExternal >
                            <GrTwitter  size='40' />
                        </Link>
                      
                        <Link   className='social-icon-link linkedin' href='https://www.linkedin.com/in/lokeshkumar777/' isExternal >
                            <GrLinkedin size='40' />
                        </Link>
                      
                    </div>
                </div>
            </section>
           
        </div>
    );
}

export default Footer;
