import styles from "../styles/About.module.css";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import React from "react";

const RESUME_FILE_ID = "1WKsjg8wV1jZVTg3h7JXUn3GX_XkJSU52";
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

export default function About() {
  const handleResumeClick = () => {
    // Open for quick review, and trigger a download in the same click.
    window.open(RESUME_VIEW_URL, "_blank", "noopener,noreferrer");

    const link = document.createElement("a");
    link.href = RESUME_DOWNLOAD_URL;
    link.setAttribute("download", "Lokesh_Kumar_Bairwa_Resume.pdf");
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "REST APIs Built" },
    { value: "30%+", label: "Perf. Gains" },
    { value: "9+", label: "Projects Shipped" },
  ];

  const tech = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux",
    "Tailwind CSS",
    "Material UI",
    "AI Integrations",
  ];

  return (
    <div className={styles.rootCont} id="about">
      <Text className={styles.headingH1} fontSize={{ base: "xl", md: "3xl" }}>
        About Me
      </Text>

      <div className={styles.mainCont}>
        <div className={styles.profilePicCont}>
          <div className={styles.profileCard}>
            <img
              src="avatar.jpg"
              alt="Lokesh Kumar Bairwa"
              className={styles.profilePic}
            />
            <div className={styles.profileInfo}>
              <div className={styles.profileName}>Lokesh Kumar Bairwa</div>
              <div className={styles.profileRole}>Full Stack Developer (MERN)</div>
            </div>
          </div>
        </div>

        <div className={styles.bioCont}>
          <p className={styles.bio}>
            Full Stack Developer (MERN) with 3+ years building scalable, production-grade web
            applications. Strong frontend depth in React.js, Next.js, and TypeScript, with hands-on
            backend experience in Node.js, Express.js, MongoDB, JWT authentication, and AI
            integrations (Groq, Tavily).
            <br />
            Reduced render time from 3s to 300ms and improved LCP by 40%. Independently built and
            deployed the ExamSaathi AI platform end to end. Available for immediate joining.
          </p>

          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.techRow}>
            {tech.map((t) => (
              <span key={t} className={styles.techChip}>
                {t}
              </span>
            ))}
          </div>

          <Flex className={styles.resumeDownload} alignItems="center">
            <Button
              className={styles.downloadBtn}
              onClick={handleResumeClick}
              leftIcon={<FaDownload color="#fff" />}
            >
              Download Resume
            </Button>
            <span className={styles.resumeHint}>Opens preview and downloads PDF</span>
          </Flex>
        </div>
      </div>
    </div>
  );
}
