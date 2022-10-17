import React, { useState } from "react";
import { Box, Link, Text, Stack, Flex, Icon } from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import '../styles/HeroSection.css';

const Logo = () => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bolder" className="logo">
        Company
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

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
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
        fontSize=""
        fontWeight="bold"
        align="center"
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
      >
        
        <MenuItem to="#">About</MenuItem>
        <MenuItem to="#">Experience</MenuItem>
        <MenuItem to="#">Projects</MenuItem>
        <MenuItem to="#">Resume</MenuItem>
        <MenuItem to="#">Contact</MenuItem>

      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return (
    <Flex
      boxShadow='dark-lg' p='6' 
      bg='blueviolet'
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="100%"
      padding={8}
      // bg={"transparent"}
      color={"white"}
      _hover={{ bg: '#ebedf0',color: 'purple'}}
      _active={{
        bg: '#dddfe2',
        // transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
    >
      {children}
    </Flex>
  );
};

function Header() {
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

export default Header;
