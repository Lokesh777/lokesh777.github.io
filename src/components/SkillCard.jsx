import { Box, Text } from "@chakra-ui/react";
import styles from "../styles/Skill/SkillCard.module.css";

export function SkillCard({ skill, icon }) {
  return (
      <Box className={styles.card}>
        {icon}

        <Text
        fontWeight="bold"
        fontSize={{ base: "11px", md: "xs" }}
        textAlign="center"
      >
        {skill}
      </Text>
      </Box>
  );
}
