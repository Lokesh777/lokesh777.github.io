import { Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import React, { useState } from "react";
import styles from "../styles/Github.module.css";

const calendarTheme = {
  light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const USERNAME = "Lokesh777";

const GithubStat = () => {
  const [streakError, setStreakError] = useState(false);

  return (
    <div className={styles.gitBox} id="github">
      <div>
        <Text className={styles.headingH1} color="#383874" textAlign={"center"} mb={8} fontSize={{ base: "xl", md: "3xl" }}>
          Github Calendar and Stats
        </Text>
      </div>

      <div className={styles.badgesRow}>
        <a href="https://github.com/Lokesh777">
          <img
            src="https://komarev.com/ghpvc/?username=Lokesh777&label=Profile%20views&color=0e75b6&style=flat"
            alt="Lokesh Kumar"
          />
        </a>
        <a href="https://github.com/Lokesh777?tab=followers">
          <img
            src="https://img.shields.io/github/followers/Lokesh777?label=Followers&style=social"
            alt="followers-count"
          />
        </a>
      </div>

      <div className={styles.Github}>
        <GitHubCalendar
          username={USERNAME}
          blockSize={13}
          blockMargin={4}
          fontSize={13}
          showTotalCount
          theme={calendarTheme}
        />
      </div>

      <div className={styles.Github}>
        {streakError ? (
          <span className={styles.errorCard}>Couldn't load GitHub streak stats.</span>
        ) : (
          <img
            height="165"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Lokesh777&hide_border=true&theme=tokyonight"
            alt="Lokesh777 GitHub streak stats"
            onError={() => setStreakError(true)}
          />
        )}
      </div>
    </div>
  );
};

export default GithubStat;
