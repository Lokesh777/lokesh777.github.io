import styles from "../styles/About.module.css";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import React from 'react';

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
        
                <br/>

                  <div>
               <Text className={styles.headingH1}   fontSize={{ base: "xl", md: "3xl" }}>About</Text>
            </div>
      
        
      <div className={styles.mainCont}>

            <div className={styles.profilePicCont}>
                
                  <img
                    src="avatar.jpg"
                    alt=""
                    className={styles.profilePic}
                  />
                </div>
          
            <div>
              
               <div>
                 <p>
                Passionate about coding and eager to work with smart people in a challenging environment. 
                Having exceptional interpersonal skills as well as the ability to produce interactions that
                organizations and people really care about. <br/>
                Love technology and try to use them smartlyto make everyday tasks easier.
                </p>
               </div>
           
                 <br/>

                  <div>
                    <Flex className={styles.resumeDownload} > <Text color={"#a00596"} >Resume Download Here -</Text>
                    <Button className= {styles.downloadBtn}  variant='outline' >
                    <FaDownload color="#a00596" onClick={()=>onButtonClick()} />
                    </Button> 
                    </Flex>
                   </div>
               {/* </ScrollTrigger> */}
           </div>

         </div>
    </div>
  );
}
