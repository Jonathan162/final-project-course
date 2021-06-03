import React from "react";
import hero from "../img/hero.jpg";
import {About, Description, Image, Hide} from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                     <motion.h2 variants= {titleAnim}><span>Hiking trips</span></motion.h2>
                    </Hide>
                    <Hide>
                    <motion.h2 variants= {titleAnim}> in <span>Spain</span></motion.h2>
                     </Hide>
                    <Hide>
                     <motion.h2 variants= {titleAnim}>- We're experts!</motion.h2>
                    </Hide>
                    </motion.div>
                    <motion.p variants={fade}>At <span>WalkingInSpain</span> you can buy hiking trips all over Spain. Choose to walk Camino de Santiago, or why not enjoy Sierra Nevada in the South?</motion.p>
                    <a href="/trips"><motion.button variants={fade}>See All Trips</motion.button></a>
            </Description>
                <Image>
                    <motion.img variants={photoAnim} src={hero} alt="" />
                </Image> 
        </About>
    );
};

export default AboutSection; 