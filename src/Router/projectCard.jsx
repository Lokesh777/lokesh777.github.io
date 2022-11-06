
import { SiChakraui, SiCss3, SiReact } from 'react-icons/si';
 
  import styles from "../styles/Project.module.css";
   
  import { Fade } from "react-awesome-reveal";
  import { Text } from "@chakra-ui/react";
import { ProjectCard } from './ProjectCarditem.jsx';
import { TiHtml5 } from "react-icons/ti";
import { TbBrandJavascript} from "react-icons/tb";

const projects = [
    {
       
      label:'Stopwatch App',      
      img: "stopwatch.png",
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
      label:'TrackingTime Clone App',
      img: "littleFog.png",
      link: "https://little-fog-1256.vercel.app/",
      git: "https://github.com/Lokesh777/little-fog-1256",
      about:
        "TrackingTime is a collaborative, cloud-based time tracking service that helps businesses of any size manage their projects, track working times and measure productivity.",
      stacks: [
        <SiReact className={styles.stackIcon} />,
        <SiChakraui className={styles.stackIcon} />,
      ],
    },
    {
      label:'PharmEasy Clone Website',
      img: "pharmaEasy.png",
      link: "https://lucent-duckanoo-8aee96.netlify.app",
      git: "https://github.com/VinayPathania/Team-Spartans.git",
      about:
        "This is e-commerce website used for buying and supplying medicine across the world.This was a team project where I with my teammates had created.My task was to do Login and Signup functionality and help in the css part. ",
      stacks: [
        <TiHtml5 className={styles.stackIcon} />,
        <TbBrandJavascript className={styles.stackIcon} />,
        <SiCss3 className={styles.stackIcon} />,
      ],
    },
    {
      label:'Lyst Clone Website',
      img: "lyst.png",
      link: "https://62aec458d002661172622f35--delightful-biscochitos-b2f2b6.netlify.app/",
      git: "https://github.com/Raj-Mandloii/lyst_project",
      about:
        "Lyst is a fashion technology company, and premium shopping app.",
      stacks: [
        <TbBrandJavascript className={styles.stackIcon} />,
        <TiHtml5 className={styles.stackIcon} />,
        <SiCss3 className={styles.stackIcon} />,
      ],
    },
  ];

 
  export function ProjectsSection() {
    return (
      <div className={styles.projectsSectionCont} id="projects">
        <Fade bottom>
          <Text className={styles.headingH1}  as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
            Projects
          </Text>
        </Fade>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <Fade bottom>
              <ProjectCard {...project} />
            </Fade>
          ))}
        </div>
      </div>
    );
  }
  