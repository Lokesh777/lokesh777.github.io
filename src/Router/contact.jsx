  import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub,BsLinkedin, BsPerson } from 'react-icons/bs';
  import emailjs from "@emailjs/browser"
  import Swal from 'sweetalert2'
  import styles from "../styles/contact.module.css"
  import { Fade,Bounce } from "react-awesome-reveal";
  import React, { useState } from 'react';
import ScrollTrigger  from 'react-scroll-trigger';
  import 'animate.css/animate.min.css';
import BouncyButton from '../components/BouncyButton';

  export default function ContactForm() {
    const [isVisible, setIsVisible] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault()
       
        emailjs.sendForm('service_6xirjde', 'template_1blpeve', e.target, 'g7jv5M7A1ijQAKAjq').then(
          (result) => {
            console.log(result.text)
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully',
            })
          },
          (error) => {
            console.log(error.text)
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          },
        )
        e.target.reset()
      }
    return (
          <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
            <div id='contact'>
            <Container bg="#15153a" maxW="full" mt={0} centerContent overflow="hidden">
              <Flex className={styles.contactContainer} >
                <Box
                  bg="#15153a"
                  color="white"
                  borderRadius="lg"
                  // m={{ sm: 4, md: 16, lg: 10 }}
                  m={{ sm: 4, md: 10, lg: 10 }}
                  // p={{ sm: 5, md: 5, lg: 16 }}
                  p={{ sm: 5, md: 40, lg: 16 }}
                  >
                  <Box p={4}>
                    <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} textAlign="center">
                      <WrapItem>
                        <Box >
                      
                          <div className={isVisible ? 'animate__animated animate__rubberBand ' : ''}>
                          <Heading >Contact</Heading>
                            <Text mt={{ sm: 5, md: 5, lg: 7 }} color="white">
                              Fill up the form below to contact
                            </Text>
                          </div>
                        
                        
                          <Box  py={{ base: 3, sm: 3, md: 5, lg: 6 }}>
                            <VStack pl={0} spacing={3} alignItems="flex-start">
                            <Bounce cascade damping={0.1} className='animate__animated  animate__repeat-2'>
                                <BouncyButton>
                                <Button
                                  size="md"
                                  height="48px"
                                  width="180px"
                                  variant="ghost"
                                  color="#DCE2FF" 
                                  _hover={{ border: '2px solid #a00596' }}
                                  leftIcon={<MdPhone color="white" size="20px" />}>
                                  +91-8448238707
                                </Button>
                                </BouncyButton>
                              </Bounce>
                              <Bounce cascade damping={0.1} className='animate__animated  animate__repeat-2'>
                                  <BouncyButton>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="270px"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: '2px solid #a00596' }}
                                    leftIcon={<MdEmail color="white" size="20px" />}>
                                  lokeshdevgan777@gmail.com
                                  </Button>
                                   </BouncyButton>
                              </Bounce>
                              <Bounce cascade damping={0.1} className='animate__animated  animate__repeat-2'>
                                  <BouncyButton>
                                  <Button
                                    size="md"
                                    height="48px"
                                    width="210px"
                                    variant="ghost"
                                    color="#DCE2FF"
                                    _hover={{ border: '2px solid #a00596' }}
                                    leftIcon={<MdLocationOn color="white" size="20px" />}>
                                    Bundi-Rajasthan, India
                                  </Button>
                                   </BouncyButton>
                              </Bounce>
                            </VStack>
                          </Box>
                        
                          <HStack
                            mt={{ lg: 10, md: 10 }}
                            spacing={5}
                            px={5}
                            alignItems="flex-start">
                          
                            <div className={isVisible ? 'animate__animated animate__bounceInLeft animate__delay-1s ' : ''}>
                              <Link _hover={{ bg: 'white',color:"#15153a" }}   className='social-icon-link github' href='https://github.com/Lokesh777' isExternal >
                                <IconButton
                                  aria-label="github"
                                  variant="ghost"
                                  size="lg"
                                  isRound={true}
                                  _hover={{  bg: 'white',color:"#15153a"  }}
                                  icon={<BsGithub size="32px" />}
                                />
                              </Link>
                          </div>
                        
                          <div className={isVisible ? 'animate__animated animate__bounceInDown animate__delay-1s ' : ''}>
                        
                              <Link _hover={{ bg: 'white',color:"#15153a" }}  className='social-icon-link twitter' href='mailto:lokeshdevgan777@gmail.com' isExternal >
                              <IconButton
                              aria-label="Email"
                              variant="ghost"
                              size="lg"
                              isRound={true}
                              _hover={{ bg: 'white',color:"#15153a"  }}
                              icon={<MdEmail size="30px" />}
                            />
                              </Link>
                            </div>
                          
                          <div className={isVisible ? 'animate__animated animate__bounceInRight animate__delay-1s ' : ''}>
                        
                                      <Link  _hover={{ bg: 'white',color:"#15153a" }} className='social-icon-link linkedin' href='https://www.linkedin.com/in/lokeshkumar777/' isExternal >
                                      <IconButton
                                        aria-label="LinkedIn"
                                        variant="ghost"
                                        size="lg"
                                        isRound={true}
                                        _hover={{  bg: 'white',color:"#15153a"  }}
                                        icon={<BsLinkedin size="28px" />}
                                      />
                                      </Link>
                           </div>
                          
                            

                          </HStack>
                        </Box>
                      </WrapItem>

                      <div className={isVisible ? 'animate__animated animate__zoomIn animate__delay-1s ' : ''}>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#15153a">
                                      <VStack spacing={5}>
                                        <form onSubmit={handleOnSubmit}>
                                      
                                        <div className={isVisible ? 'animate__animated animate__rotateIn animate__delay-2s' : ''}>
                                            <FormControl id="name">
                                              <FormLabel color={"#15153a"}>Your Name</FormLabel>
                                              <InputGroup borderColor="#15153a">
                                                <InputLeftElement
                                                  pointerEvents="none"
                                                  children={<BsPerson color={"#15153a"} />}
                                                />
                                                <Input type="text" name="your_name" size="md" />
                                              </InputGroup>
                                            </FormControl>
                                          </div>
                                      
                                          <div className={isVisible ? 'animate__animated animate__rotateIn animate__delay-2s' : ''}>
                                            <FormControl id="name">
                                              <FormLabel color={"#15153a"}>Mail</FormLabel>
                                              <InputGroup borderColor="#15153a">
                                                <InputLeftElement
                                                  pointerEvents="none"
                                                  children={<MdOutlineEmail color={"#15153a"} />}
                                                />
                                                <Input type="text" name="your_email" size="md" />
                                              </InputGroup>
                                            </FormControl>
                                            </div>
                                      
                                      <div className={isVisible ? 'animate__animated animate__rotateIn animate__delay-2s' : ''}>
                                        <FormControl id="name">
                                          <FormLabel color={"#15153a"}>Message</FormLabel>
                                          <Textarea
                                            borderColor="#15153a"
                                            _hover={{
                                              borderRadius: 'gray.300',
                                            }}
                                            name="your_message"
                                            placeholder="message"
                                          />
                                        </FormControl>
                                        </div>
                                        <div className={isVisible ? 'animate__animated animate__rotateIn animate__delay-2s' : ''}>
                                        <FormControl id="name" float="right">
                                        <BouncyButton>
                                          <Button
                                          className={styles.submitBtn}
                                          type="submit"
                                            variant="solid"
                                            bg="#15153a"
                                            color="white"
                                            _hover={{}}>
                                            Send Message
                                          </Button>
                                          </BouncyButton>
                                        </FormControl>
                                        </div>
                                      

                                        </form>
                                      </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                       </div>
                    </Wrap>
                  </Box>
                </Box>
              </Flex>
            </Container>
            </div>
         </ScrollTrigger>
    );
  }