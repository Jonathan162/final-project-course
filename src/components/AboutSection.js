import React from "react";
import hero from "../img/hero.jpg";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hiking trips</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              {" "}
              in Spain<span>.</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </motion.p>
        <a href="/trips">
          <motion.button variants={fade}>See All Trips</motion.button>
        </a>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={hero} alt="" />
      </Image>
    </About>
  );
};

export default AboutSection;
