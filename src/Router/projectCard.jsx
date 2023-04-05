
import { SiChakraui, SiCss3, SiReact,SiExpress,SiMongodb,SiMaterialui, SiRedux } from 'react-icons/si';
 
  import styles from "../styles/Project.module.css";
   
  import { Fade } from "react-awesome-reveal";
  import { Text } from "@chakra-ui/react";
import { ProjectCard } from './ProjectCarditem.jsx';
import { TiHtml5 } from "react-icons/ti";
import { TbBrandJavascript} from "react-icons/tb";
import React, { useState } from 'react';
import ScrollTrigger  from 'react-scroll-trigger';
  import 'animate.css/animate.min.css';

const projects = [
    {
       
      label:'Car World',      
      img: "carWorld.gif",
      link: "https://incandescent-khapse-53714e.netlify.app/",
      git: "https://github.com/Lokesh777/CarWorld",
      about:
        "Car World- new experience - is a online information platform and provide all statistics with pie and bar chart.",
      stacks: [
        <SiReact className={styles.stackIcon} />
      ],
    },
    {
       
      label:'Wonderlust',      
      img: "wonderlust.gif",
      link: "https://prized-ring-1889.netlify.app/",
      git: "https://github.com/Lokesh777/WonderLust",
      about:
       "Wonderust was the first website that allowed customers to purchase travel tickets without the help of a travel agent, making it a pioneer in web-based travel options.",
      stacks: [
        <SiReact className={styles.stackIcon} />,
        <SiChakraui className={styles.stackIcon} />,
        <SiMaterialui className={styles.stackIcon} />,
        <SiExpress className={styles.stackIcon} />,
        <SiMongodb className={styles.stackIcon} />,
      ],
    },
    {
       
      label:'Stopwatch App',      
      img: "Stopwatch.jpeg",
      link: "https://stopwatch-ehclrh1le-lokesh777.vercel.app/",
      git: "https://github.com/Lokesh777/StopWatch",
      about:
        "A stopwatch is a timepiece designed to measure the amount of time that elapses between its activation and deactivation.",
      stacks: [
        <SiReact className={styles.stackIcon} />,
        <SiChakraui className={styles.stackIcon} />,
      ],
    },
    {
      label:'Clone Page App',
      img: "cloneApp.gif",
      link: "https://kaleidoscopic-basbousa-ac4f85.netlify.app/",
      git: "https://github.com/Lokesh777/own_app",
      about:
        "It is a clones page App that helps in businesses to manage their projects like Quiz App, games advertise,crud operation with add data and measure productivity.",
      stacks: [
        <SiReact className={styles.stackIcon} />,
        <SiRedux className={styles.stackIcon} />,
        <SiMaterialui className={styles.stackIcon} />,
        <SiExpress className={styles.stackIcon} />,
        <SiMongodb className={styles.stackIcon} />,

      ],
    },
    {
      label:'PharmEasy Clone Website',
      img: "pharmaEasy.png",
      link: "https://holistic-remedies.netlify.app/",
      git: "https://github.com/VinayPathania/Team-Spartans.git",
      about:
        "This is e-commerce website used for buying and supplying medicine across the world.",
      stacks: [
        <TiHtml5 className={styles.stackIcon} />,
        <TbBrandJavascript className={styles.stackIcon} />,
        <SiCss3 className={styles.stackIcon} />,
      ],
    },
    {
      label:'Apna Mart',      
      img: "Apnamart.gif",
      link: "https://fascinating-gnome-6dd32e.netlify.app/",
      git: "https://github.com/Lokesh777/Apna-Mart",
      about:
        "Apna Mart- India Ki Apni Dukaan - is a multicategory online shopping platform and provide home delivery.",
      stacks: [
        <SiReact className={styles.stackIcon} />,
        <SiChakraui className={styles.stackIcon} />,
        <SiExpress className={styles.stackIcon} />,
        <SiMongodb className={styles.stackIcon} />,
      ],
    },
  ];

 
  export function ProjectsSection() {
    
    const [isVisible, setIsVisible] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setIsVisible(true)} onExit={() => setIsVisible(false)}>
      <div className={styles.projectsSectionCont} id="projects">
            <div className={isVisible ? 'animate__animated animate__rubberBand ' : ''}>
                <Fade bottom>
                  <Text className={styles.headingH1}  as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={16}>
                    Projects
                  </Text>
                </Fade>
            </div>
       

        <div className={styles.projectGrid}>
          {projects.map((project) => (

            <div className={isVisible ? 'animate__animated animate__zoomIn ' : ''}>

              <Fade bottom>
                <ProjectCard {...project} />
              </Fade>
         
          </div>

))}
        </div>

      </div>
</ScrollTrigger> 
    );
  }
  