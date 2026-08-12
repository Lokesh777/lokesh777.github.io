import { Link } from "react-scroll";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "../styles/navbar.module.css";

export default function NavbarPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box boxShadow="dark-lg" className={styles.mainBox}>
      <Flex
        minH="4.5rem"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 3, md: 6 }}
      >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ base: "inline-flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <Box>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            activeClass={styles.active}
            spy={true}
            hashSpy={true}
          >
            <Avatar
              boxSize={["10", "12"]}
              borderRadius="full"
              className={styles.myLogo}
              src="LB.gif"
            />
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
            <span className={styles.nav}>Home</span>
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={1000}
            activeClass={styles.active}
            spy={true}
            hashSpy={true}
          >
            <span className={styles.nav}>About</span>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            activeClass={styles.active}
            spy={true}
            hashSpy={true}
          >
            <span className={styles.nav}>Skills</span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            activeClass={styles.active}
            spy={true}
            hashSpy={true}
          >
            <span className={styles.nav}>Projects</span>
          </Link>
          <Link
            to="github"
            smooth={true}
            duration={1000}
            activeClass={styles.active}
            spy={true}
            hashSpy={true}
          >
            <span className={styles.nav}>GitHubCalendar</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            activeClass={styles.active}
            spy={true}
            hashSpy={true}
          >
            <span className={styles.nav}>Contact</span>
          </Link>

          <a
            href="https://drive.google.com/file/d/1WKsjg8wV1jZVTg3h7JXUn3GX_XkJSU52/view"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.nav}>Resume</span>
          </a>
        </HStack>
      </Flex>

      {isOpen && (
        <Box bg="#15153a" pb={4} display={{ md: "none" }}>
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
            <a
              href="https://drive.google.com/file/d/1WKsjg8wV1jZVTg3h7JXUn3GX_XkJSU52/view"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.nav}>Resume</div>
            </a>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
