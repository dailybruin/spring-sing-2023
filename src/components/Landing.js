import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Box from "../images/credit_border.svg";


const Illo = styled.img`
    width: 100vw;
    object-fit: cover;
    position: relative;
`;

const CreditsContainer = styled.img`
    position: absolute;
    bottom: -13em;
    right: 1em;
    width: 20em;
`

const Credits = styled.div`
    position: relative;
    float: right;
    color: black;
    margin-right: 15px;
    padding-top: 1em;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    ${mediaQueries.mobile} {
        font-size: 14px;
    }
`;

export default function Landing(props) {
    return (
      <div>
        <Illo src={props.landing_image}></Illo>
        <CreditsContainer src={Box}/>
        <Credits>{props.landing_credits}</Credits>
      </div>
    );
  }