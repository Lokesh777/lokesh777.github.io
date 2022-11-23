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
  
  export default function ContactForm() {

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
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box >
                    <Heading >Contact</Heading>
                    <Text mt={{ sm: 5, md: 5, lg: 7 }} color="white">
                      Fill up the form below to contact
                    </Text>
                    <Box  py={{ base: 3, sm: 3, md: 5, lg: 6 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
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
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                    
                      
                    
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

                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#15153a">
                      <VStack spacing={5}>
                        <form onSubmit={handleOnSubmit}>
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
                        <FormControl id="name" float="right">
                          <Button
                          className={styles.submitBtn}
                          type="submit"
                            variant="solid"
                            bg="#15153a"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      </div>
    );
  }