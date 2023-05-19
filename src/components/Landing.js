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

const CreditsContainer = styled.div`
    position: relative;
    height: fit-content;
    margin-right: 0;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CreditsImage = styled.img`
    width: 100%;
    margin-right: 1em;
    /* ${mediaQueries.mobile} {
      width: 30%;
      right: -0.5em;
    } */
    ${mediaQueries.mobile} {
        width: 80%;
        font-size: 8px;
        line-height: 12px;
    }
`

const Credits = styled.div`
  position: absolute;
  color: black;
  margin: auto;
  text-align: center;
  margin-right: 1em;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  ${mediaQueries.mobile} {
      font-size: 12px;
  }
`;

export default function Landing(props) {
    return (
      <Container>
        <Illo src={props.landing_image}></Illo>
        <CreditsContainer>
          <CreditsImage src={Box}/>
          <Credits>{props.landing_credits}</Credits>
        </CreditsContainer>
      </Container>
    );
}