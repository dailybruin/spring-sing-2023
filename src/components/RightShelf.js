import React from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

const OuterContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
`;

const ShelfContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

const Shelf = styled.div`
  box-sizing: border-box;
  width: 97%;
  height: 35px;
  background-color: #c08e5f;
  border: 2px solid #866b52;
  border-right: 0;
  box-shadow: 0px 4px 4px 0px #0000003f;
`;

const Records = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px; /* Added gap for horizontal spacing */
  position: relative;
`;

const CardMargin = styled.div`
  margin-bottom: 20px;
`;

const RECORD_COLORS = ["brown", "black"];

export default function RightShelf({ articles }) {
  if (!articles) {
    return null; // or return an appropriate fallback component or message
  }

  return (
    <OuterContainer>
      <Records>
        {articles.map((article, index) => {
          let color = RECORD_COLORS[index];
          return (
            <CardMargin key={index}>
              <ArticleCard
                article_title={article.article_title}
                article_image={article.article_image}
                article_url={article.article_url}
                article_byline={article.article_byline}
                article_color={color}
              />
            </CardMargin>
          );
        })}
      </Records>
      <ShelfContainer>
        <Shelf />
      </ShelfContainer>
    </OuterContainer>
  );
}
