import styles from "../styles/About.module.css";
import { Fade } from "react-awesome-reveal";
import { Button, Flex, Text } from "@chakra-ui/react";

import { FaDownload } from "react-icons/fa";


export default function About() {

  const onButtonClick = () => {
    
    fetch('LokeshKumarBairwa.pdf').then(response => {
        response.blob().then(blob => {
        
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Lokesh Kumar Bairwa.pdf';
            alink.click();
        })
    })
}


  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <Text className={styles.headingH1}   fontSize={{ base: "xl", md: "3xl" }}>About</Text>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="avatar.png"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Lokesh Kumar Bairwa</span>
            </h2>

            <p>
              A web developer with a vast array of knowledge in many different
              front end and backend languages, responsive frameworks, databases,
              and best code practices. Look forward to using my skills for
              gaining more experience.
            </p>
            <br/>
          <Flex> <Text color={"#383874"} >Resume Download Here -</Text> <Button className= {styles.downloadBtn}  variant='outline' ><FaDownload onClick={()=>onButtonClick()} /></Button>  </Flex>
           
          </div>
        </div>
      </Fade>
    </div>
  );
}
