import React from "react";
import jon from "../img/jon.jpg"
import {About, Description, Image, Hide} from "../styles";
import styled from "styled-components";
import bag from "../img/bag.png";
import affordable from "../img/affordable.png";
import satisfaction from "../img/satisfaction.png";
import cancel from "../img/cancel.png";


const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>
                    Why book with <span>us</span>?
                </h2>
                    <Cards>
                            <Card>
                                <div className="icon">
                                    <img src={bag} alt="icon"/>
                                <h3>A lot of trips</h3>
                                </div>
                                <p>Choose from our many hiking trips.</p>
                            </Card>
                            <Card>
                                <div className="icon">
                                    <img src={affordable} alt="icon"/>
                                <h3>Great prices</h3>
                                 </div>
                                <p>Enjoy the best prices on hiking trips in Spain.</p>
                            </Card>
                            <Card>
                                <div className="icon">
                                    <img src={cancel} alt="icon"/>
                                <h3>Cancellation</h3>
                                 </div>
                                <p>During COVID-19 we have free cancellation on all trips.</p>
                            </Card>
                            <Card>
                                <div className="icon">
                                    <img src={satisfaction} alt="icon"/>
                                <h3>Service</h3>
                                 </div>
                                <p>Our customer service is great! Just ask any of our guests.</p>
                            </Card>
                </Cards>
            </Description>
            <Image>
                <img src={jon} alt=""/>
            </Image>
        </Services>
    );
};

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    } 
`;

const Cards = styled.div` 
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
        }
`;

const Card = styled.div`
    flex-basis: 16rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;


export default ServicesSection;
