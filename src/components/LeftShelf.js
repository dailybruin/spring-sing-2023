import React from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

const OuterContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
`;

const ShelfContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const Shelf = styled.div`
  box-sizing: border-box;
  width: 97%;
  height: 35px;
  background-color: #c08e5f;
  border: 2px solid #866b52;
  border-left: 0;
  box-shadow: 0px 4px 4px 0px #0000003f;
`;

const Records = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
`;

const CardMargin = styled.div`
  margin-left: 30px;
`;

const RECORD_COLORS = ["brown", "black"];

export default function LeftShelf({ articles }) {
  return (
    <OuterContainer>
      <ShelfContainer>
        <Records>
          {articles.map((article, index) => {
            let color = RECORD_COLORS[index];
            return (
              <CardMargin>
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
        <Shelf />
      </ShelfContainer>
    </OuterContainer>
  );
}
