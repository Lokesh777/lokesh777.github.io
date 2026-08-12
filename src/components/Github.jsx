import { Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import React, { useEffect, useState } from "react";
import styles from "../styles/Github.module.css";

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

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Shell: "#89e051",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
};

function TopLanguagesCard({ username }) {
  const [langs, setLangs] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    async function loadLanguages() {
      try {
        setStatus("loading");
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const repos = await res.json();
        if (!Array.isArray(repos)) throw new Error("Invalid GitHub response");

        const counts = {};
        repos.forEach((repo) => {
          if (repo.fork || !repo.language) return;
          counts[repo.language] = (counts[repo.language] || 0) + 1;
        });

        const total = Object.values(counts).reduce((sum, n) => sum + n, 0);
        const ranked = Object.entries(counts)
          .map(([name, count]) => ({
            name,
            count,
            pct: total ? Math.round((count / total) * 1000) / 10 : 0,
            color: LANG_COLORS[name] || "#7a7fb8",
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 8);

        if (cancelled) return;
        if (ranked.length === 0) {
          setStatus("error");
          return;
        }
        setLangs(ranked);
        setStatus("ready");
      } catch (err) {
        console.error("Top languages failed:", err);
        if (!cancelled) setStatus("error");
      }
    }

    loadLanguages();
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (status === "loading") {
    return <div className={styles.langsCard}>Loading top languages…</div>;
  }

  if (status === "error") {
    return (
      <span className={styles.errorCard}>
        Couldn&apos;t load top languages.{" "}
        <a href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </span>
    );
  }

  return (
    <div className={styles.langsCard}>
      <div className={styles.langsTitle}>Most Used Languages</div>
      <div className={styles.langsList}>
        {langs.map((lang) => (
          <div key={lang.name} className={styles.langRow}>
            <span className={styles.langName}>{lang.name}</span>
            <div className={styles.langBarWrap}>
              <div
                className={styles.langBar}
                style={{ width: `${Math.max(lang.pct, 4)}%`, background: lang.color }}
              />
            </div>
            <span className={styles.langPct}>{lang.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const GithubStat = () => {
  const [streakError, setStreakError] = useState(false);
  const [showHeavy, setShowHeavy] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setShowHeavy(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowHeavy(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.gitBox} id="github" ref={sectionRef}>
      <div>
        <Text
          className={styles.headingH1}
          color="#383874"
          textAlign={"center"}
          mb={8}
          fontSize={{ base: "xl", md: "3xl" }}
          as="h2"
        >
          Github Calendar and Stats
        </Text>
      </div>

      {showHeavy ? (
        <>
          <div className={styles.badgesRow}>
            <a
              href="https://github.com/Lokesh777"
              target="_blank"
              rel="noreferrer"
              className={styles.textBadge}
            >
              GitHub profile
            </a>
            <a
              href="https://github.com/Lokesh777?tab=followers"
              target="_blank"
              rel="noreferrer"
              className={styles.textBadge}
            >
              Followers on GitHub
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
            <div className={styles.statCard}>
              {streakError ? (
                <span className={styles.errorCard}>Couldn&apos;t load GitHub streak stats.</span>
              ) : (
                <img
                  className={styles.statImage}
                  src={STREAK_STATS_URL}
                  alt="Lokesh777 GitHub streak stats"
                  width={495}
                  height={195}
                  loading="lazy"
                  decoding="async"
                  onError={() => setStreakError(true)}
                />
              )}
            </div>
            <div className={styles.statCard}>
              <TopLanguagesCard username={USERNAME} />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.statsRow} aria-hidden="true">
          <div className={styles.statCard} />
          <div className={styles.statCard} />
        </div>
      )}
    </div>
  );
};

export default GithubStat;
