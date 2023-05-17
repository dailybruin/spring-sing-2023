import React from 'react';
import styled from 'styled-components';
import Border from '../images/blurb_border.svg'
import { mediaQueries } from '../shared/config';

const Container = styled.div`
width: 100%;
position: relative;
height: fit-content;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Image = styled.img`
width: 94%;
margin-left: 1em;
margin-top: 5em;
margin-bottom: 5em;
`

const TextBox = styled.div`
position: absolute;
width: 48%;
margin: auto;
text-align: center;
font-family: 'Poppins', sans-serif;
line-height: 30px;
font-size: calc(22px + (20 - 12) * ((40vw - 600px) / (1920 - 1600)));
color: black;
text-align: center;
line-height: 1.4;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);


${mediaQueries.mobile} {
    width: 50vw;
    font-size: 8px;
    line-height: 12px;
}
`

export default function Blurb(props){
    return (
        <Container>
            <Image src={Border}/>
            <TextBox>{props.description_text}</TextBox>
        </Container>

    )
}