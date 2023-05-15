import styled from 'styled-components'
import React from 'react'
import VinylBlack from '../images/vinyl_black.svg';
import VinylGreen from '../images/vinyl_green.svg';
import VinylBrown from '../images/vinyl_brown.svg';
import VinylMaroon from '../images/vinyl_maroon.svg';
import VinylPurple from '../images/vinyl_purple.svg';
import VinylTeal from '../images/vinyl_teal.svg';

const Container = styled("div")`
height: 600px;
width: 600px;
position: relative;
top: 50px;
left: 0;
`
const Background = styled("img")`
height: 237px;
width: 310.96px;
position: absolute;
top: 0;
left: 0;
boxShadow: 
z-index: 1;
`

const Image = styled("img")`
height: 217px;
width: 214px;
position: absolute;
top: 2px;
left: 8px;
border: 4px solid #000000;
z-index: 2;
`

const Title = styled("text")`
position: absolute;
top: 20px;
left: 11px;
width: 209px;
height: 131px;
z-index: 3;

font-family: 'Modak';
font-size: 28px;
line-height: 42px;
text-align: center;

color: #FFFFFF;
`

const ByLine = styled("text")`
position: absolute;
width: 209px;
height: 32px;
top: 163px;
left: 11px;
z-index: 4;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
text-align: center;

color: #FFFFFF;
`

const ArticleCard = (props) => { //replace <container> with <> 
    return (
        <>   
          {props.article_color === "black" && (<Background src={VinylBlack} />)}
          {props.article_color === "green" && (<Background src={VinylGreen} />)}
          {props.article_color === "brown" && (<Background src={VinylBrown} />)}
          {props.article_color === "teal" && (<Background src={VinylTeal} />)}
          {props.article_color === "maroon" && (<Background src={VinylMaroon} />)}
          {props.article_color === "purple" && (<Background src={VinylPurple} />)}

          <a href={props.article_url}>  
            <Image src={props.article_image} />
            <Title href={props.article_url}>{props.article_title}</Title>
            <ByLine>{props.article_byline}</ByLine>
          </a>
        </>
    )
}
export default ArticleCard
