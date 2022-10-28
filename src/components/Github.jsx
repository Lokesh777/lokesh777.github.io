import { Text } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import GitHubCalendar from "react-github-calendar";
import styles from "../styles/Github.module.css";
const GithubStat = () => {
  return (
    <div className={styles.gitBox}  id="github">
      <Fade bottom>
        <Text className={styles.headingH1} color="#383874" textAlign={"center"} mb={8} fontSize={{ base: "xl", md: "3xl" }}>Github Calender and Stats</Text>
      <div className={styles.Github}>
        <GitHubCalendar username="lokesh777" className="calender" />
      </div>
      <div className={styles.Github}>
        <a href="https://github.com/lokesh777" rel="noreferrer" target="_blank">
          <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=lokesh777&show_icons=true&count_private=true&theme=outrun"
            height="192px"
          />
        </a>
      </div>
      </Fade>
    </div>
  );
};

export default GithubStat;