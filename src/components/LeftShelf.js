import React from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

// const OuterContainer = styled.div`
//   max-width: 100vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   position: relative;
// `;

// const ShelfContainer = styled.div`
//   width: 65%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   position: relative;
// `;

const Container = styled.div`
    max-width: 100vw;
    position: relative;
    overflow: visible;
    height: 20em;
    margin-top: 15em;
    margin-bottom: 10em;
`

const Shelf = styled.div`
  width: 70%;
  height: 2.25em;
  background: #C08E5F;
  border: 2px solid #866B52;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* float: left; */
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const RecordsGrid = styled.div`
  /* width: 70%; */
  display: flex;
  width: 55em;
  float: left;
`;

const Records = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  gap: 20em;
  margin-right: 30em;
`;

const CardMargin = styled.div`
  margin-left: 0px;
`;

// const RECORD_COLORS = ["brown", "black"];

export default function LeftShelf({ articles }) {
  return (
    <Container>
      {/* <ShelfContainer> */}
      <RecordsGrid>
        <Records>
          {articles.map((article, index) => {
            // let color = RECORD_COLORS[index];
            return (
              <CardMargin>
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
      <Shelf />
      {/* </ShelfContainer> */}
    </Container>
  );
}
