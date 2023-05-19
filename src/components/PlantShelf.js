import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Plant from "../images/plant.svg";
import ArticleCard from "./ArticleCard.js";

const Container = styled.div`
    max-width: 100vw;
    position: relative;
    overflow: visible;
    height: 20em;
    margin-top: 10em;
    /* margin-bottom: 20em; */
`

const Grid = styled.div`
  /* display: flex; */
  width: 55vw;
  float: left;
  margin-left: 4em;
  gap: 20em;

`;

const Records = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 20em;
  /* position: relative; */

`

const Shelf = styled.div`
  width: 80%;
  height: 2.25em;
  background: #C08E5F;
  border: 2px solid #866B52;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export default function PlantShelf(props) {
  return (
    <Container>
          <Grid>
            <Records>
              {props && props.articles
                  ? props.articles.map((item) => {
                    console.log(item)
                      return (
                          <ArticleCard
                            article_color={item.article_color}
                            article_title={item.article_title}
                            article_byline={item.article_byline}
                            article_image={item.article_image}
                            article_url={item.article_url}
                          />
                      );
                  })
              : null}
            </Records>
          </Grid>
          <Shelf>
          <h1></h1>
          <img style={{"width": "15em", "float":"right", "margin-bottom": "-1.25em"}} src={Plant}/>
        </Shelf>
      </Container> 
  );
}