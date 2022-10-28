import React, { useState } from "react";
import {Link} from "react-scroll"
import { Box, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import '../styles/HeroSection.css';
import { FaLaptop } from "react-icons/fa";

const Logo = () => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bolder" className="logo">
       <FaLaptop size='40' color="white"/>
      </Text>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
    </Box>
  );
};



const MenuLinks = ({ isOpen }) => {
  return (
    <Box 
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
      
        spacing={8}
        fontSize="20px"
        fontWeight="bold"
        align="center"
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
      >
        
         <Link
                to="Home"
                smooth={true}
                duration={1000}
                activeClass={true}
                spy={true}
                hashSpy={true}
              >
                <div >Home</div>
              </Link>

         <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass={true}
                spy={true}
                hashSpy={true}
              >
                <div >About</div>
              </Link>
              
         <Link
                to="skills"
                smooth={true}
                duration={1000}
                activeClass={true}
                spy={true}
                hashSpy={true}
              >
                <div >Skills</div>
           </Link>

            <Link
                    to="projects"
                    smooth={true}
                    duration={1000}
                    activeClass={true}
                    spy={true}
                    hashSpy={true}
                  >
                    <div >Projects</div>
            </Link>

            <Link
                    to="github"
                    smooth={true}
                    duration={1000}
                    activeClass={true}
                    spy={true}
                    hashSpy={true}
                  >
                    <div >GitHub Stats</div>
            </Link>

            <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass={true}
                spy={true}
                hashSpy={true}
              >
                <div >Contact</div>
           </Link>


      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return (
    <Flex
      boxShadow='dark-lg'  
      bg='blueviolet'
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="100%"
      padding={8}
      // z-index="-1"
      position="fixed" 
      // bg={"transparent"}
      color={"white"}
      // _hover={{ bg: '#ebedf0',color: 'purple'}}
      // _active={{
      //   bg: '#dddfe2',
      //   transform: 'scale(0.98)',
      //   borderColor: '#bec3c9',
      // }}
      // _focus={{
      //   boxShadow:
      //     '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      // }}
    >
      {children}
    </Flex>
  );
};


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer  >
      <Logo  />
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
}

export default Navbar;
