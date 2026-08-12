import styles from "../styles/Skill/SkillCard.module.css";
import { cloneElement } from "react";

export function SkillCard({ skill, icon }) {
  const safeIcon = icon
    ? cloneElement(icon, {
        "aria-hidden": true,
        focusable: "false",
        role: "presentation",
        title: undefined,
      })
    : null;

  return (
    <li className={styles.card}>
      {safeIcon}
      <span className={styles.skillName}>{skill}</span>
    </li>
  );
}
