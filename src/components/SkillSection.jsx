import { SkillCard } from "./SkillCard"
import styles from "../styles/Skill/SkillsSection.module.css"
import { GrReactjs } from "react-icons/gr"
import { SiChakraui, SiRedux } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import { SiNpm } from "react-icons/si"
import { SiPostman } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { Fade } from "react-awesome-reveal"
import { Text } from "@chakra-ui/react";
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import 'animate.css/animate.min.css';

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  return (

        <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
    <div className={styles.rootCont} id="skills">
       <Fade bottom>
          <div className={isVisible ? 'animate__animated animate__bounceInRight ' : ''}>
              
        <Text className={styles.headingH1} color="#383874" as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
          Front-end skills
        </Text>

        <div className={styles.skillsContFront}>
          <SkillCard
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.reactIcon}`}
              />
            }
          />
          <SkillCard
            skill="Redux"
            icon={
              <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
            }
          />
          <SkillCard
            skill="JavaScript"
            icon={
              <SiJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
          <SkillCard
            skill="Chakra-Ui"
            icon={
              <SiChakraui
                className={`${styles.skillIcon} ${styles.muiIcon}`}
              />
            }
          />

          <SkillCard
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
          <SkillCard
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }


          />


        </div>
        </div>
         
        <div className={isVisible ? 'animate__animated animate__zoomInDown animate__delay-1s ' : ''}>
                 
        <Text className={styles.headingH1} color="#383874" as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
          Back-end skills
        </Text>

        <div className={styles.skillsContBack}>
          <SkillCard className={styles.nodess}
            skill="Node"
            icon={
              <SiNodedotjs
                className={`${styles.skillIcon} ${styles.nodeIcon}`}
              />
            }
          />

          <SkillCard
            skill="MongoDb"
            icon={
              <SiMongodb
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />

          <SkillCard
            skill="Express"
            icon={
              <SiExpress
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </div>
       </div>
      
            
          <div className={isVisible ? 'animate__animated animate__bounceInLeft' : ''}>
         <Text className={styles.headingH1} color="#383874" as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
          Tools
        </Text>

        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
          <SkillCard
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
          <SkillCard
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </div>
       </div>
      </Fade>
    </div>
       </ScrollTrigger>
  )
}
