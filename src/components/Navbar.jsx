import { Link as ScrollLink } from "react-scroll";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "../styles/navbar.module.css";

const NAV_ITEMS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "github", label: "GitHub" },
  { to: "contact", label: "Contact" },
];

function NavScrollLink({ to, children, onClick, className, "aria-label": ariaLabel }) {
  return (
    <ScrollLink
      to={to}
      href={`#${to}`}
      smooth
      duration={600}
      spy
      hashSpy
      activeClass={styles.active}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </ScrollLink>
  );
}

export default function NavbarPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box boxShadow="dark-lg" className={styles.mainBox} as="header">
      <Flex
        minH="4.5rem"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 3, md: 6 }}
      >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          display={{ base: "inline-flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <NavScrollLink
          to="home"
          className={styles.logoLink}
          aria-label="Lokesh Kumar Bairwa home"
        >
          <img
            src={`${process.env.PUBLIC_URL}/L.jpg`}
            alt=""
            width={48}
            height={48}
            className={styles.myLogo}
            fetchpriority="high"
            decoding="async"
          />
          <span className={styles.srOnly}>Lokesh Kumar Bairwa — Home</span>
        </NavScrollLink>

        <HStack
          as="nav"
          spacing={8}
          display={{ base: "none", md: "flex" }}
          aria-label="Primary"
        >
          {NAV_ITEMS.map(({ to, label }) => (
            <NavScrollLink key={to} to={to}>
              <span className={styles.nav}>{label}</span>
            </NavScrollLink>
          ))}
          <a
            href="https://drive.google.com/file/d/1WKsjg8wV1jZVTg3h7JXUn3GX_XkJSU52/view"
            target="_blank"
            rel="noreferrer"
            className={styles.nav}
          >
            Resume
          </a>
        </HStack>
      </Flex>

      {isOpen && (
        <Box bg="#15153a" pb={4} display={{ md: "none" }} as="nav" aria-label="Mobile">
          <Stack spacing={4}>
            {NAV_ITEMS.map(({ to, label }) => (
              <NavScrollLink key={to} to={to} onClick={onClose}>
                <span className={styles.nav}>{label}</span>
              </NavScrollLink>
            ))}
            <a
              href="https://drive.google.com/file/d/1WKsjg8wV1jZVTg3h7JXUn3GX_XkJSU52/view"
              target="_blank"
              rel="noreferrer"
              className={styles.nav}
              onClick={onClose}
            >
              Resume
            </a>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
