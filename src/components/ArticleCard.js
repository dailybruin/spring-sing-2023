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
  position: relative;
  bottom: 14em;
`

const Background = styled.img`
  height: 237px;
  width: 310.96px;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 1;  */
`

const Image = styled.img`
  height: 217px;
  width: 214px;
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
    height: 217px;
    width: 215px;
    background-color: rgba(255,255,255,0.5);
  }
`

const Title = styled.div`
  display: block;
  font-family: 'Modak';
  font-size: 22px;
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
  font-size: 14px;
  text-align: center;
  padding-top: 1em;
`

export default function ArticleCard(props) { 
  function getBackground(color){
    if (color == "black"){
        console.log(color)
        return VinylBlack;
    }
    if (color == "green"){
        return VinylGreen;
    }
    if (color == "brown"){
      return VinylBrown;
    }
    if (color == "teal"){
      return VinylTeal;
    }
    if (color == "maroon"){
      return VinylMaroon;
    }
    if (color == "purple"){
      return VinylPurple;
    }
    else {
      return VinylBlack;
    }
  }

  return (
      <Container href={props.article_url}>   
          <Background src={getBackground(props.article_color)} />
          <Image src={props.article_image} />
          <Info>
            <Title>{props.article_title}</Title>
            <ByLine> {props.article_byline}</ByLine>
          </Info>
      </Container>
  )
}

// {props.article_title}
// {props.article_byline}

