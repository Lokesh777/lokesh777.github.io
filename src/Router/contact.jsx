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
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import styles from "../styles/contact.module.css";
import React, { useState } from "react";

export default function ContactForm() {
  const SPREADSHEET_URL =
    "https://script.google.com/macros/s/AKfycbzpgUOcjg5qqxvkMiaP4K1_f8TvfGvDaEXvZNj3pCPckMiu7S1NraPX4JfKh54cf7Ytrw/exec";

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
      e.preventDefault();
      if (isFormValid) {
        handleOnSubmit({
          preventDefault: () => {},
          currentTarget: e.currentTarget,
          target: e.currentTarget,
        });
      }
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newErrors = {};
    if (!formValues.your_name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formValues.your_email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail) {
      newErrors.email = "Enter a valid email";
    }
    const phone = formValues.your_phone.trim();
    if (phone && !/^[+()\-\s\d]{7,20}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formValues.your_message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const payload = {
      name: formValues.your_name,
      email: formValues.your_email,
      phone: formValues.your_phone,
      message: formValues.your_message,
      timestamp: new Date().toISOString(),
    };

    fetch(SPREADSHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    }).catch((sheetError) => console.error("Spreadsheet fallback failed:", sheetError));

    emailjs.sendForm("service_6xirjde", "template_1blpeve", form, "g7jv5M7A1ijQAKAjq").then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
        form.reset();
        resetForm();
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "success",
          title: "Message Recorded Successfully",
        });
        form.reset();
        resetForm();
      }
    );
  };

  return (
    <div id="contact" className={styles.contactRoot}>
      <Container bg="#15153a" maxW="full" centerContent overflow="hidden" px={{ base: 3, md: 6 }}>
        <Flex className={styles.contactContainer} w="100%" maxW="1100px" justify="center">
          <Box
            bg="#15153a"
            color="white"
            borderRadius="lg"
            w="100%"
            m={{ base: 2, md: 8 }}
            p={{ base: 4, md: 8, lg: 10 }}
          >
            <div className={styles.contactGrid}>
              <Box className={styles.contactInfo}>
                <Heading as="h2" size={{ base: "lg", md: "xl" }}>Contact</Heading>
                <Text mt={3} color="whiteAlpha.800" fontSize={{ base: "sm", md: "md" }}>
                  Fill up the form below to get in touch.
                </Text>

                <VStack mt={6} spacing={3} alignItems={{ base: "center", md: "flex-start" }} w="100%">
                  <Button
                    as="a"
                    href="tel:+917065667959"
                    className={styles.infoBtn}
                    variant="ghost"
                    color="#EEF0FF"
                    leftIcon={<MdPhone color="#EEF0FF" size="20px" aria-hidden="true" />}
                    _hover={{ border: "2px solid #c4b5fd", bg: "transparent" }}
                    aria-label="Call +91 7065667959"
                  >
                    +91-7065667959
                  </Button>
                  <Button
                    as="a"
                    href="mailto:lokeshdevgan777@gmail.com"
                    className={styles.infoBtn}
                    variant="ghost"
                    color="#EEF0FF"
                    leftIcon={<MdEmail color="#EEF0FF" size="20px" aria-hidden="true" />}
                    _hover={{ border: "2px solid #c4b5fd", bg: "transparent" }}
                    aria-label="Email address lokeshdevgan777@gmail.com"
                  >
                    lokeshdevgan777@gmail.com
                  </Button>
                  <p className={styles.infoBtn} aria-label="Location: Bundi, Rajasthan, India">
                    <MdLocationOn color="#EEF0FF" size="20px" aria-hidden="true" />
                    <span>Bundi, Rajasthan, India</span>
                  </p>
                </VStack>

                <HStack mt={8} spacing={4} justify={{ base: "center", md: "flex-start" }}>
                  <IconButton
                    as="a"
                    href="https://github.com/Lokesh777"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Lokesh Kumar on GitHub"
                    variant="ghost"
                    size="lg"
                    isRound
                    color="white"
                    _hover={{ bg: "white", color: "#15153a" }}
                    icon={<BsGithub size="28px" aria-hidden="true" focusable="false" />}
                  />
                  <IconButton
                    as="a"
                    href="mailto:lokeshdevgan777@gmail.com"
                    aria-label="Send email to lokeshdevgan777@gmail.com"
                    variant="ghost"
                    size="lg"
                    isRound
                    color="white"
                    _hover={{ bg: "white", color: "#15153a" }}
                    icon={<MdEmail size="28px" aria-hidden="true" focusable="false" />}
                  />
                  <IconButton
                    as="a"
                    href="https://www.linkedin.com/in/lokeshkumar777/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Lokesh Kumar on LinkedIn"
                    variant="ghost"
                    size="lg"
                    isRound
                    color="white"
                    _hover={{ bg: "white", color: "#15153a" }}
                    icon={<BsLinkedin size="26px" aria-hidden="true" focusable="false" />}
                  />
                </HStack>
              </Box>

              <Box className={styles.formCard} bg="white" borderRadius="lg" color="#15153a">
                <Box p={{ base: 5, md: 8 }}>
                  <form onSubmit={handleOnSubmit} onKeyDown={handleKeyDown} noValidate>
                    <FormControl id="name" isInvalid={!!errors.name} mb={4}>
                      <InputGroup borderColor="#15153a">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="#15153a" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          name="your_name"
                          size="md"
                          placeholder="Your Name"
                          bg="#f7f8fc"
                          focusBorderColor="#3a3a7a"
                          rounded="md"
                          value={formValues.your_name}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl id="email" isInvalid={!!errors.email} mb={4}>
                      <InputGroup borderColor="#15153a">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="#15153a" />
                        </InputLeftElement>
                        <Input
                          type="email"
                          name="your_email"
                          size="md"
                          placeholder="Email Address"
                          bg="#f7f8fc"
                          focusBorderColor="#3a3a7a"
                          rounded="md"
                          value={formValues.your_email}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl id="phone" isInvalid={!!errors.phone} mb={4}>
                      <InputGroup borderColor="#15153a">
                        <InputLeftElement pointerEvents="none">
                          <MdPhone color="#15153a" />
                        </InputLeftElement>
                        <Input
                          type="tel"
                          name="your_phone"
                          size="md"
                          placeholder="Phone Number (optional)"
                          bg="#f7f8fc"
                          focusBorderColor="#3a3a7a"
                          rounded="md"
                          value={formValues.your_phone}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <FormErrorMessage>{errors.phone}</FormErrorMessage>
                    </FormControl>

                    <FormControl id="message" isInvalid={!!errors.message} mb={4}>
                      <Textarea
                        borderColor="#15153a"
                        bg="#f7f8fc"
                        focusBorderColor="#3a3a7a"
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
                        w={{ base: "100%", sm: "auto" }}
                        _hover={{ bg: "#2a2a5a" }}
                        isDisabled={!isFormValid}
                      >
                        Send Message
                      </Button>
                    </FormControl>
                  </form>
                </Box>
              </Box>
            </div>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
