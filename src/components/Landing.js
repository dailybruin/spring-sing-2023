import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Box from "../images/credit_border.svg";


const Container = styled.div`
  height: 120%;
  background: #E5D2C0;
  position: relative;
`

const Illo = styled.img`
    width: 100vw;
    object-fit: cover;
    
`;

const CreditsContainer = styled.img`
    position: relative;
    width: 18vw;
    float: right;
    margin-right: 1em;
    ${mediaQueries.mobile} {
      width: 30%;
      right: -0.5em;
    }
`

const Credits = styled.div`
  position: absolute;
  color: black;
  right: 2.2em;
  padding-top: 1em;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  ${mediaQueries.mobile} {
      font-size: 6px;
      right: 3em;
      padding-top: 1em;
  }
`;

export default function Landing(props) {
    return (
      <Container>
        <Illo src={props.landing_image}></Illo>
        <CreditsContainer src={Box}/>
        <Credits>{props.landing_credits}</Credits>
      </Container>
    );
}