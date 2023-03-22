import styles from "../styles/Project.module.css"
import LinkIcon from "@mui/icons-material/Link"
import GitHubIcon from "@mui/icons-material/Link"
import { Fade } from "react-awesome-reveal"
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css/animate.min.css';
import BouncyButton from "../components/BouncyButton";

export function ProjectCard({ label, img, git, link, stacks, about }) {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <> 
       <BouncyButton>
        <div className={styles.projectCont}>
          
          <img src={img} alt="" className={styles.image} />

          <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
            <div className={isVisible ? 'animate__animated animate__rollIn animate__delay-1s ' : ''}>
              <p style={{ color: "#15153a", fontSize: "25px", fontWeight: "400", margin: "5px 0 0 0" }}>
                {label}
              </p>

              <div className={styles.stacksDiv2}>
                {stacks.map((stack) => stack)}
              </div>

              <div className={styles.linkCont}>
                <a href={git} rel="noreferrer" target="_blank">
                  <div className={styles.linkDiv}>
                    <GitHubIcon />
                    <p>Code</p>
                  </div>
                </a>
                <div className={styles.stacksDiv}>{stacks.map((stack) => stack)}</div>

                <a href={link} rel="noreferrer" target="_blank">
                  <div className={styles.linkDiv}>
                    <LinkIcon />
                    <p>Demo</p>
                  </div>
                </a>
              </div>

              <div className={styles.projInfo}>
                <Fade bottom>
                  <p>{about}</p>
                </Fade>
              </div>

            </div>
          </ScrollTrigger>
        </div>
      </BouncyButton>
    </>
  )
}
