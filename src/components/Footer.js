
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import facebook from "../img/facebook.png";
import youtube from "../img/youtube.png";
import twitter from "../img/twitter.png";

const Footer = () => {
    return(
        <StyledNav>
            <div className="social-wrapper">
                <h1><Link id="logo" to="/">WalkingInSpain</Link></h1>
                        <img src={facebook} alt="facebook logo" />
                        <img src={youtube} alt="youtube logo" />
                        <img src={twitter} alt="twitter logo" />
            </div>
        </StyledNav> 
    )
}

const StyledNav = styled.nav `
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 10rem;
    background-color: #282828;
    

    #logo {
        font-size: 1.5rem;
        font-family: 'ZCOOL KuaiLe', cursive;
        font-weight: lighter;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .social-links {
        display: flex;
    }

    img {
        padding: 1rem 0.5rem;
    }

    img:hover {
        cursor: pointer;
    }

`;


export default Footer;