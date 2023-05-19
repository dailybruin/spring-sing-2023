import styled from 'styled-components'
import React from 'react'
import VinylBlack from '../images/vinyl_black.svg';
import VinylGreen from '../images/vinyl_green.svg';
import VinylBrown from '../images/vinyl_brown.svg';
import VinylMaroon from '../images/vinyl_maroon.svg';
import VinylPurple from '../images/vinyl_purple.svg';
import VinylTeal from '../images/vinyl_teal.svg';

const Container = styled.a`
  /* height: 600px;
  width: 600px; */
  height: 100%;
  position: absolute;
  bottom: -2.5em;
  /* left: 2em; */
`

const Background = styled.img`
  height: 140px;
  width: 190.96px;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 1;  */
`

const Image = styled.img`
  height: 125px;
  width: 125px;
  object-fit: cover;
  position: absolute;
  left: 0.7em;
  top: 0.25em;
`

const Info = styled.div`
  display: none;
  position: absolute;

  ${Container}:hover & {
    display: inline-block;
    position: absolute;
    left: 0.7em;
    top: 0.25em;
    z-index: 15;
    height: 125px;
    width: 125px;
    background-color: rgba(255,255,255,0.5);
  }
`

const Title = styled.div`
  display: block;
  font-family: 'Modak';
  font-size: 12px;
  color: #FFFFFF;
  padding-top: 1em;
  line-height: 1.3em;
  text-align: center;

`

const ByLine = styled.div`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 8px;
  text-align: center;
  padding-top: 1em;
`

export default function MobileArticleCard(props) { 
  function getBackground(color){
    console.log(props.children)
    if (color === "black"){
        console.log(color)
        return VinylBlack;
    }
    if (color === "green"){
        return VinylGreen;
    }
    if (color === "brown"){
      return VinylBrown;
    }
    if (color === "teal"){
      return VinylTeal;
    }
    if (color === "maroon"){
      return VinylMaroon;
    }
    if (color === "purple"){
      return VinylPurple;
    }
    else {
      return VinylBlack;
    }
  }

  return (
      <Container href={props.children[5]}>   
          <Background src={getBackground(props.children[9])} />
          <Image src={props.children[3]} />
        <Info>
            <Title>{props.children[1]}</Title>
            <ByLine> {props.children[7]}</ByLine>
        </Info>
      </Container>
  )
}

// {props.article_title}
// {props.article_byline}

