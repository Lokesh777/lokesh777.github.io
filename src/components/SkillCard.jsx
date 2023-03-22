import { Box, Text } from "@chakra-ui/react";
import styles from "../styles/Skill/SkillCard.module.css";
import BouncyButton from "./BouncyButton";

export function SkillCard({ skill, icon }) {
  return (
      <BouncyButton>
        <Box className={styles.card}>
          {icon}

          <Text fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>
            {skill}
          </Text>
        </Box>
    </BouncyButton>
  );
}
