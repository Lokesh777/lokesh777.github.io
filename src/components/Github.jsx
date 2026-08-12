import { Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import React, { useState } from "react";
import styles from "../styles/Github.module.css";

// Matches portfolio navy palette (#15153a family)
const calendarTheme = {
  level0: "#eef0f8",
  level1: "#c5c9e8",
  level2: "#7a7fb8",
  level3: "#3a3a7a",
  level4: "#15153a",
};

const USERNAME = "Lokesh777";

const STREAK_STATS_URL =
  "https://streak-stats.demolab.com/?user=Lokesh777" +
  "&hide_border=true" +
  "&background=15153A" +
  "&ring=3A3A7A" +
  "&fire=A00596" +
  "&currStreakLabel=CFCFF5" +
  "&sideLabels=A8A8D0" +
  "&currStreakNum=FFFFFF" +
  "&sideNums=E0E0F6" +
  "&dates=B7B7D8";

const TOP_LANGS_URL =
  "https://github-readme-stats.vercel.app/api/top-langs/?username=Lokesh777" +
  "&layout=compact" +
  "&hide_border=true" +
  "&title_color=CFCFF5" +
  "&text_color=E0E0F6" +
  "&bg_color=15153A" +
  "&langs_count=8";

const GithubStat = () => {
  const [streakError, setStreakError] = useState(false);
  const [langsError, setLangsError] = useState(false);

  return (
    <div className={styles.gitBox} id="github">
      <div>
        <Text
          className={styles.headingH1}
          color="#383874"
          textAlign={"center"}
          mb={8}
          fontSize={{ base: "xl", md: "3xl" }}
        >
          Github Calendar and Stats
        </Text>
      </div>

      <div className={styles.badgesRow}>
        <a href="https://github.com/Lokesh777" target="_blank" rel="noreferrer">
          <img
            src="https://komarev.com/ghpvc/?username=Lokesh777&label=Profile%20views&color=15153a&style=flat"
            alt="Lokesh Kumar profile views"
          />
        </a>
        <a
          href="https://github.com/Lokesh777?tab=followers"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/github/followers/Lokesh777?label=Followers&style=social"
            alt="GitHub followers"
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

      <div className={styles.statsRow}>
        <div className={styles.Github}>
          {streakError ? (
            <span className={styles.errorCard}>Couldn&apos;t load GitHub streak stats.</span>
          ) : (
            <img
              className={styles.statImage}
              src={STREAK_STATS_URL}
              alt="Lokesh777 GitHub streak stats"
              onError={() => setStreakError(true)}
            />
          )}
        </div>
        <div className={styles.Github}>
          {langsError ? (
            <span className={styles.errorCard}>Couldn&apos;t load top languages.</span>
          ) : (
            <img
              className={styles.statImage}
              src={TOP_LANGS_URL}
              alt="Lokesh777 most used languages"
              onError={() => setLangsError(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GithubStat;
