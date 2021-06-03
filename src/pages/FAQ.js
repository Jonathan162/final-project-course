import React from "react";
import {motion} from "framer-motion";
import {pageAnimation, titleAnim} from "../animation";
import ScrollTop from "../components/ScrollTop"
import FaQSection from "../components/FaqSection";


const FAQ = () => {
    return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <FaQSection />
        <ScrollTop />
    </motion.div>
    );
};

export default FAQ; 