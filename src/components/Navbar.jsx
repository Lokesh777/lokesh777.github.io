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

        <a href="#home" className={styles.logoLink}>
          <img
            src={`${process.env.PUBLIC_URL}/L.jpg`}
            alt="Lokesh Kumar Bairwa"
            width={48}
            height={48}
            className={styles.myLogo}
            fetchpriority="high"
            decoding="async"
          />
        </a>

        <HStack
          as="nav"
          spacing={8}
          display={{ base: "none", md: "flex" }}
          aria-label="Primary"
        >
          {NAV_ITEMS.map(({ to, label }) => (
            <a key={to} href={`#${to}`} className={styles.nav}>
              {label}
            </a>
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
              <a key={to} href={`#${to}`} className={styles.nav} onClick={onClose}>
                {label}
              </a>
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
