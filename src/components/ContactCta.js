
import React from "react";
import styled from "styled-components";

const ContactCta = () => {
    return (
        <ContactCtaSyle>
            <h2>
               Contact Us<span>.</span>
            </h2>
            <a href="/contact"><button>Click Here</button></a>
        </ContactCtaSyle>
    );
};

const ContactCtaSyle = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
padding: 2rem 0;

button {
    margin: 2rem 0;
}

`;

export default ContactCta;