import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Box from "../images/credit_border.svg";


const CreditsContainer = styled.img`
    width: 18em;
`

const Credits = styled.div`
    float: right;
    color: black;
    margin-right: 1.5em;
    padding-top: 0.5em;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    ${mediaQueries.mobile} {
        font-size: 14px;
    }
`;


export default function LandingCredits(props) {
    return (
      <div>
        <CreditsContainer src={Box}/>
        <Credits>{props.landing_credits}</Credits>
      </div>
    );
  }