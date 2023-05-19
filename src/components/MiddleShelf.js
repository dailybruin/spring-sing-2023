import styled from 'styled-components'
import React from 'react';
import ArticleCard from "./ArticleCard.js";

const Container = styled.div`
    max-width: 100vw;
    position: relative;
    overflow: visible;
    height: 20em;
    margin-top: 15em;
    margin-bottom: 10em;
`

// const Vinyls = styled.div`
//     display: flex;
//     width: 60%;
//     margin: auto;
//     justify-content: space-around;
//     flex-direction: row;  
//     height: fit-content;
// `

const RecordsGrid = styled.div`
  display: flex;
  width: 60%;
  margin: auto;
  justify-content: space-around;
  flex-direction: row;  
  height: fit-content;
`;

const Records = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 20em;
`;

const Shelf = styled.div`
  width: 80%;
  height: 2.25em;
  background-color: #C08E5F;
  margin: auto;
  border: 2px solid #866B52;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

/*
<Card
article_title={item.article_title}
article_byline={item.article_byline}
article_image={item.article_image}
article_url={item.article_url}
color={item.color}
/>
*/

const MiddleShelf = ({articles}) => {
  return (
    <Container>
      <RecordsGrid>
        <Records>
          {articles.map((article, index) => {
            return (
                <ArticleCard
                  article_title={article.article_title}
                  article_image={article.article_image}
                  article_url={article.article_url}
                  article_byline={article.article_byline}
                  article_color={article.article_color}
                />
            );
          })}
        </Records>
      </RecordsGrid>
      <Shelf />
    </Container>
  )
}

export default MiddleShelf;