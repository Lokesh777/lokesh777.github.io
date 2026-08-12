import { Box, Text } from "@chakra-ui/react";
import styles from "../styles/Skill/SkillCard.module.css";
import { cloneElement } from "react";

export function SkillCard({ skill, icon }) {
  const safeIcon = icon
    ? cloneElement(icon, {
        "aria-hidden": true,
        focusable: "false",
        role: "presentation",
        className: [icon.props?.className, styles.skillIconInline].filter(Boolean).join(" "),
      })
    : null;

  return (
    <Box className={styles.card} as="li">
      {safeIcon}
      <Text fontWeight="bold" fontSize={{ base: "11px", md: "xs" }} textAlign="center">
        {skill}
      </Text>
    </Box>
  );
}
