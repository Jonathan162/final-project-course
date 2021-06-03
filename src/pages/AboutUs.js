import React from "react";
import AboutSection from "../components/AboutSection";
import ContactCta from "../components/ContactCta";
import Services from "../components/ServicesSection";
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import ScrollTop from "../components/ScrollTop"

const AboutUs = () => {
    return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection />
        <Services />
        <ContactCta />
        <ScrollTop />
    </motion.div>
    );
};

export default AboutUs; 