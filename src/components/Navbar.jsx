import { Link } from "react-scroll";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  // useColorModeValue,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "../styles/navbar.module.css";
import ScrollTrigger  from 'react-scroll-trigger';
  import 'animate.css/animate.min.css';
import BouncyButton from "./BouncyButton";

export default function NavbarPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
 

  const onButtonClick = () => {
    
    fetch('LokeshKumarBairwa.pdf').then(response => {
        response.blob().then(blob => {
        
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Lokesh Kumar Bairwa.pdf';
            alink.click();
        })
    })
}


// const Reload = () => {
//   window.location.reload();
// };


  return (
    <>
     {/* <Box
        bg={useColorModeValue("#eaf8f8", "#eaf8f8")}
        px={4}
        className={styles.mainBox}
      ></Box> */}
      <Box
         boxShadow='dark-lg'  
         height={"4.5rem"}
         // bg='blueviolet'
        // bg={useColorModeValue("blueviolet", "#eaf8f8")}
         // px={4}
         className={styles.mainBox}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            <HStack
              justifyContent={{ base: "center", md: "space-between" }}
              w={"100%"}
              p={4}
              spacing={8}
              alignItems={"center"}
            >
              <Box>
              
              
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                >
                      

                  <BouncyButton >
                        <Avatar
                            // onClick={Reload}
                            boxSize={["10","12","14","16"]}
                            borderRadius="full"
                            className={styles.myLogo}
                            mt={['3','4','4','4']}
                            ml={['1','1','1','2']}
                              size={"md"}
                              src="LB.gif"
                            />
                 </BouncyButton>
                </Link>

              </Box>

              <HStack
                as={"nav"}
                spacing={8}
                display={{ base: "none", md: "flex" }}
              >
               <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                >
                  <BouncyButton >
                    <span  className={styles.nav }>
                       Home
                    </span>
                 </BouncyButton>
                </Link>
             

                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                >
                  <BouncyButton >
                    <span  className={styles.nav }>
                    About
                    </span>
                 </BouncyButton>
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                >
                     <BouncyButton >
                    <span  className={styles.nav }>
                    Skills
                    </span>
                 </BouncyButton>
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                >
                      <BouncyButton >
                    <span  className={styles.nav }>
                    Projects
                    </span>
                 </BouncyButton>
                </Link>
                <Link
                  to="github"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                >
                  <BouncyButton >
                    <span  className={styles.nav }>
                    GitHubCalendar
                    </span>
                 </BouncyButton>
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                >
                      <BouncyButton >
                    <span  className={styles.nav }>
                    Contact
                    </span>
                 </BouncyButton>
                </Link>
              
                <Link
                  to="resume"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={onButtonClick }
                >
                      <BouncyButton >
                    <span  className={styles.nav }>
                    Resume
                    </span>
                 </BouncyButton>
                </Link>

              </HStack>

            </HStack>
        </Flex>

        {isOpen ? (
            <Box
            bg='#15153a'
            pb={4}
            display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={onClose}
                >
                  <div className={styles.nav}>Home</div>
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={onClose}
                >
                  <div className={styles.nav}>About</div>
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  onClick={onClose}
                  hashSpy={true}
                >
                  <div className={styles.nav}>Skills</div>
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  onClick={onClose}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                >
                  <div className={styles.nav}>Projects</div>
                </Link>
                <Link
                  to="github"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={onClose}
                >
                  <div className={styles.nav}>GitHubCalendar</div>
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={onClose}
                >
                  <div className={styles.nav}>Contact</div>
                </Link>
                <Link
                  to="resume"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={onButtonClick }
                >
                  <div className={styles.nav}>Resume</div>
                </Link>
            
              </Stack>
            </Box>
        ) : null}
      </Box>
    </>
  );
}
