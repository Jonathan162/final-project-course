
import React from "react";
import {motion} from "framer-motion";
import {pageAnimation, titleAnim} from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop"

const ContactUs = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" 
        animate="show" style={{ background: "#fff" }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in <span>touch</span>.</motion.h2>
                </Hide>
            </Title>
            <div className="contact-container">
                <Hide>
                <Social variants={titleAnim}>
                <Circle />
                <h2><a href="#">Chat</a> with us.</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                <Circle />
                <h2>Send an <a href="#">email</a>.</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnim}>
                <Circle />
                <h2><a href="#">Social Media</a>.</h2>
                </Social>
                </Hide>
                <ScrollTop />
            </div>
        </ContactStyle>
    );
};

//STYLE

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px)  {
            padding: 2rem;
            font-size: 1rem;
        }
    a {
        font-weight: lighter;
        font-size: 3.5rem;
        color: #1b1b1b;
        text-decoration: underline;

        &:hover {
        color: #F8E16C;
        }
    }

`;
const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px)  {
            margin-top: 5rem;
        }
`;
const Hide = styled.div `
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #F8E16C;
`
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
        h2 {
        margin: 2rem;
        }
`;


export default ContactUs;