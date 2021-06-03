
import React from "react";
import styled from "styled-components";
import {About} from "../styles";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from "framer-motion";

const FaqSection = () => {
    return (
        <Faq>
            <h2>
                Frequently Asked Questions<span>(FAQ)</span>
            </h2>
            <AnimateSharedLayout>
            <Toggle title={"How do I book?"}>
                <div className="answer">
                    <p>Lorem ipsum, Lorem ipsum,</p>
                    <p>Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,.</p>
                </div>
            </Toggle>
            <Toggle title={"What about Covid-19?"}>
                <div className="answer">
                    <p>Lorem ipsum, Lorem ipsum,</p>
                    <p>Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,.</p>
                </div>
            </Toggle>
            <Toggle title={"I want to cancel"}>
                <div className="answer">
                    <p>Lorem ipsum, Lorem ipsum,</p>
                    <p>Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,.</p>
            </div>
            </Toggle>
            <Toggle title={"Which payment methods do you offer?"}>
                <div className="answer">
                    <p>Lorem ipsum, Lorem ipsum,</p>
                    <p>Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(About) `
display: block;

span {
    display: block;
}

h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
}

.faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
    }

.question {
    padding: 3rem 0rem;
    cursor: pointer;
}

.answer {
    padding: 2rem 0rem;
    p {
        padding: 1rem 0rem;
    }
}
`;
export default FaqSection;