
import { SiChakraui, SiCss3, SiReact,SiExpress,SiMongodb,SiMaterialui } from 'react-icons/si';
 
  import styles from "../styles/Project.module.css";
   
  import { Fade } from "react-awesome-reveal";
  import { Text } from "@chakra-ui/react";
import { ProjectCard } from './ProjectCarditem.jsx';
import { TiHtml5 } from "react-icons/ti";
import { TbBrandJavascript} from "react-icons/tb";

const projects = [
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
      label:'TrackingTime Clone App',
      img: "TrackingTime.jpeg",
      link: "https://little-fog-1256.vercel.app/",
      git: "https://github.com/Lokesh777/little-fog-1256",
      about:
        "It is a cloud-based service that helps businesses to manage their projects and working times, and measure productivity.",
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
        "This is e-commerce website used for buying and supplying medicine across the world.",
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
          <Text className={styles.headingH1}  as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={16}>
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
  