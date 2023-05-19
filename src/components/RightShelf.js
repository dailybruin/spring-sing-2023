import React from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

// const OuterContainer = styled.div`
//   max-width: 100vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   position: relative;
//   overflow: visible;
//   height: 20em;
//   margin-top: 10em;
//   margin-bottom: 10em;
// `;
const Container = styled.div`
    max-width: 100vw;
    position: relative;
    overflow: visible;
    height: 20em;
    margin-top: 15em;
    margin-bottom: 10em;
    /* margin-bottom: 225.5625em; */
`
// const ShelfContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   position: relative;
// `;

// const Shelf = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   height: 2.25em;
//   background-color: #c08e5f;
//   border: 2px solid #866b52;
//   border-right: 0;
//   box-shadow: 0px 4px 4px 0px #0000003f;
// `;

const Shelf = styled.div`
  width: 85%;
  height: 2.25em;
  background: #C08E5F;
  border: 2px solid #866B52;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  float: right;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const RecordsGrid = styled.div`
  /* width: 70%; */
  display: flex;
  width: 55em;
  float: right;
  margin-right: 5em;
`;

const Records = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20em; /* Added gap for horizontal spacing */
  position: relative;
  margin-right: 5em;
`;

const CardMargin = styled.div`
  margin-bottom: 0px;
`;

const RECORD_COLORS = ["purple", "black", "maroon"];

export default function RightShelf({ articles }) {
  if (!articles) {
    return null; // or return an appropriate fallback component or message
  }

  return (
    <Container>
      <RecordsGrid>
        <Records>
          {articles.map((article, index) => {
            // let color = RECORD_COLORS[index];
            return (
              <CardMargin key={index}>
                <ArticleCard
                  article_title={article.article_title}
                  article_image={article.article_image}
                  article_url={article.article_url}
                  article_byline={article.article_byline}
                  article_color={article.article_color}
                />
              </CardMargin>
            );
          })}
        </Records>
      </RecordsGrid>
      {/* <ShelfContainer> */}
        <Shelf />
      {/* </ShelfContainer> */}
    </Container>
  );
}
