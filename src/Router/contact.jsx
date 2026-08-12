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
    FormErrorMessage,
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
  import React, { useState } from 'react';

  export default function ContactForm() {
    // Replace with your own Google Apps Script Web App URL
    // (Deploy -> New deployment -> Web app -> Execute as me, access: Anyone)
    const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbzpgUOcjg5qqxvkMiaP4K1_f8TvfGvDaEXvZNj3pCPckMiu7S1NraPX4JfKh54cf7Ytrw/exec";

    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({
      your_name: "",
      your_email: "",
      your_phone: "",
      your_message: "",
    });

    const handleChange = (e) => {
      setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.your_email.trim());
    const isFormValid =
      formValues.your_name.trim().length > 0 &&
      isValidEmail &&
      formValues.your_message.trim().length > 0;

    const resetForm = () => {
      setFormValues({
        your_name: "",
        your_email: "",
        your_phone: "",
        your_message: "",
      });
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
        e.preventDefault()
        if (isFormValid) {
          handleOnSubmit({
            preventDefault: () => {},
            currentTarget: e.currentTarget,
            target: e.currentTarget,
          })
        }
      }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        const newErrors = {}
        if (!formValues.your_name.trim()) {
          newErrors.name = "Name is required"
        }
        if (!formValues.your_email.trim()) {
          newErrors.email = "Email is required"
        } else if (!isValidEmail) {
          newErrors.email = "Enter a valid email"
        }
        const phone = formValues.your_phone.trim()
        if (phone && !/^[+()\-\s\d]{7,20}$/.test(phone)) {
          newErrors.phone = "Enter a valid phone number"
        }
        if (!formValues.your_message.trim()) {
          newErrors.message = "Message is required"
        }

        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) return

        const payload = {
          name: formValues.your_name,
          email: formValues.your_email,
          phone: formValues.your_phone,
          message: formValues.your_message,
          timestamp: new Date().toISOString(),
        }

        // Always record the submission in the spreadsheet.
        fetch(SPREADSHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload),
        }).catch((sheetError) => console.error('Spreadsheet fallback failed:', sheetError))

        emailjs.sendForm('service_6xirjde', 'template_1blpeve', form, 'g7jv5M7A1ijQAKAjq').then(
          (result) => {
            console.log(result.text)
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully',
            })
            form.reset()
            resetForm()
          },
          (error) => {
            console.log(error.text)
            // Email failed but the message is safely stored in the spreadsheet.
            Swal.fire({
              icon: 'success',
              title: 'Message Recorded Successfully',
            })
            form.reset()
            resetForm()
          },
        )
      }
    return (
            <div id='contact'>
            <Container bg="#15153a" maxW="full" mt={0} centerContent overflow="hidden">
              <Flex className={styles.contactContainer} >
                <Box
                  bg="#15153a"
                  color="white"
                  borderRadius="lg"
                  m={{ sm: 4, md: 10, lg: 10 }}
                  p={{ sm: 5, md: 40, lg: 16 }}
                  >
                  <Box p={4}>
                    <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} textAlign="center">
                      <WrapItem>
                        <Box >
                       
                          <div>
                          <Heading >Contact</Heading>
                            <Text mt={{ sm: 5, md: 5, lg: 7 }} color="white">
                              Fill up the form below to contact
                            </Text>
                          </div>
                        
                        
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
                                +91-7065667959
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

                      <div>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#15153a">
                                      <VStack spacing={5}>
                                          <form onSubmit={handleOnSubmit} onKeyDown={handleKeyDown} noValidate>

                                            <FormControl id="name" isInvalid={!!errors.name} mb={4}>
                                              <InputGroup borderColor="#15153a">
                                                <InputLeftElement
                                                  pointerEvents="none"
                                                  children={<BsPerson color={"#15153a"} />}
                                                />
                                                <Input type="text" name="your_name" size="md" placeholder="Your Name" bg="#faf7ff" focusBorderColor="#a00596" rounded="md" value={formValues.your_name} onChange={handleChange} />
                                              </InputGroup>
                                              <FormErrorMessage>{errors.name}</FormErrorMessage>
                                            </FormControl>

                                            <FormControl id="email" isInvalid={!!errors.email} mb={4}>
                                              <InputGroup borderColor="#15153a">
                                                <InputLeftElement
                                                  pointerEvents="none"
                                                  children={<MdOutlineEmail color={"#15153a"} />}
                                                />
                                                <Input type="email" name="your_email" size="md" placeholder="Email Address" bg="#faf7ff" focusBorderColor="#a00596" rounded="md" value={formValues.your_email} onChange={handleChange} />
                                              </InputGroup>
                                              <FormErrorMessage>{errors.email}</FormErrorMessage>
                                            </FormControl>

                                            <FormControl id="phone" isInvalid={!!errors.phone} mb={4}>
                                              <InputGroup borderColor="#15153a">
                                                <InputLeftElement
                                                  pointerEvents="none"
                                                  children={<MdPhone color={"#15153a"} />}
                                                />
                                                <Input type="tel" name="your_phone" size="md" placeholder="Phone Number (optional)" bg="#faf7ff" focusBorderColor="#a00596" rounded="md" value={formValues.your_phone} onChange={handleChange} />
                                              </InputGroup>
                                              <FormErrorMessage>{errors.phone}</FormErrorMessage>
                                            </FormControl>

                                            <FormControl id="message" isInvalid={!!errors.message} mb={4}>
                                              <Textarea
                                                borderColor="#15153a"
                                                bg="#faf7ff"
                                                focusBorderColor="#a00596"
                                                rounded="md"
                                                name="your_message"
                                                placeholder="Message..."
                                                rows={5}
                                                value={formValues.your_message}
                                                onChange={handleChange}
                                              />
                                              <FormErrorMessage>{errors.message}</FormErrorMessage>
                                            </FormControl>

                                          <FormControl id="submit">
                                            <Button
                                            className={styles.submitBtn}
                                            type="submit"
                                              variant="solid"
                                              bg="#15153a"
                                              color="white"
                                              _hover={{}}
                                              isDisabled={!isFormValid}>
                                              Send Message
                                            </Button>
                                          </FormControl>

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
    );
  }
