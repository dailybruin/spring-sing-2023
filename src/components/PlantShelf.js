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
    margin-top: 20em;
    /* margin-bottom: 225.5625em; */
`

const Grid = styled.div`
  display: flex;
  width: 55em;
  grid-template-columns: repeat(2, 1fr);
  overflow: visible;
  /* margin-bottom: -20.116em; */
  margin-left: 4em;

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
    align-items: center;
  }
`;

const Shelf = styled.div`
  width: 80%;
  height: 2.25em;
  /* margin-left: -0.01953125em; */
  background: #C08E5F;
  border: 2px solid #866B52;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

/*<img style={{"width": "20%", "float":"left"}} src={LeftDivider}/>
//margin-top: 2035px;

*/
//<h1>PLANT SHELF</h1>

export default function PlantShelf(props) {
  return (
  <>     
      <Container>
            <Grid>
            {props && props.articles
                  ? props.articles.map((item) => {
                      return (
                          <ArticleCard
                          article_float = "green"
                          article_title={item.article_title}
                          article_byline={item.article_byline}
                          article_image={item.article_image}
                          article_url={item.article_url}
                          />
                      );
                  })
              : null}
            </Grid>
            <Shelf>
            <h1></h1>
            <img style={{"width": "15em", "float":"right", "margin-bottom": "-1.25em"}} src={Plant}/>
          </Shelf>
        </Container> 
  </>
  );
}