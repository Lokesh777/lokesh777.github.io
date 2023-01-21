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
              <p align="center">
        
                <img backgroundColor="#383874" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Lokesh777&theme=2077"/>

              </p>
          </div>
        
          <div className={styles.Github}>
            <p align="center" >
              <a href="https://github-profile-trophy.vercel.app/?username=Lokesh777&theme=algolia">
                <img backgroundColor="#383874" src="https://github-profile-trophy.vercel.app/?username=Lokesh777&theme=algolia" alt="Lokesh777" />
                </a>
              </p> 
          </div>
     
      </Fade>
    </div>
  );
};

export default GithubStat;