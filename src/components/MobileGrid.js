import styled from "styled-components";
import React from "react";
import ArticleCard from "./ArticleCard";

const OuterContainer = styled.div`
  position: relative;
  display: block;
  width: 90%;
  height: auto;
  margin: auto;
  padding-top: 3em;
`;

const Container1 = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
  margin-bottom: 70px;
  border: 1px solid transparent;
`;

const Container2 = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
  margin-bottom: 70px;
  border: 1px solid transparent;
`;

const Box = styled.div`
  width: 40%;
  height: 80%;
  margin: auto;
  // border: 1px solid orange;
  margin-top: 4.5%;
`;

const LeftBox = styled.div`
  width: 40%;
  float: left;
  height: 80%;
  margin-left: 5%;
  // border: 1px solid purple;
  margin-top: 4.5%;
`;

const RightBox = styled.div`
  width: 40%;
  float: right;
  height: 80%;
  margin-right: 5%;
  // border: 1px solid purple;
  margin-top: 4.5%;
`;

const Shelf = styled.div`
  width: 100%;
  height: 10%;
  background-color: #c08e5f;
  border: 2px solid #866b52;
  position: absolute;
  bottom: 0;
  //   box-shadow: 0px 4px 4px rgba (0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px grey;
`;

export default function MobileGrid(props) {
  console.log(props.stories);
  return (
    <OuterContainer>
      <Container1>
        <Box>
          <ArticleCard>
            article_title = {props.stories[0].article_title}
            article_image = {props.stories[0].article_image}
            article_url = {props.stories[0].article_url}
            article_byline = {props.stories[0].article_byline}
            article_color = {props.stories[0].article_color}
          </ArticleCard>
        </Box>
        <Shelf></Shelf>
      </Container1>
      <Container2>
        <LeftBox>
          <ArticleCard>
            article_title = {props.stories[1].article_title}
            article_image = {props.stories[1].article_image}
            article_url = {props.stories[1].article_url}
            article_byline = {props.stories[1].article_byline}
            article_color = {props.stories[1].article_color}
          </ArticleCard>
        </LeftBox>
        <RightBox>
          <ArticleCard>
            article_title = {props.stories[2].article_title}
            article_image = {props.stories[2].article_image}
            article_url = {props.stories[2].article_url}
            article_byline = {props.stories[2].article_byline}
            article_color = {props.stories[2].article_color}
          </ArticleCard>
        </RightBox>
        <Shelf></Shelf>
      </Container2>
      <Container1>
        <Box>
          <ArticleCard>
            article_title = {props.stories[3].article_title}
            article_image = {props.stories[3].article_image}
            article_url = {props.stories[3].article_url}
            article_byline = {props.stories[3].article_byline}
            article_color = {props.stories[3].article_color}
          </ArticleCard>
        </Box>
        <Shelf></Shelf>
      </Container1>
      <Container2>
        <LeftBox>
          <ArticleCard>
            article_title = {props.stories[4].article_title}
            article_image = {props.stories[4].article_image}
            article_url = {props.stories[4].article_url}
            article_byline = {props.stories[4].article_byline}
            article_color = {props.stories[4].article_color}
          </ArticleCard>
        </LeftBox>
        <RightBox>
          <ArticleCard>
            article_title = {props.stories[5].article_title}
            article_image = {props.stories[5].article_image}
            article_url = {props.stories[5].article_url}
            article_byline = {props.stories[5].article_byline}
            article_color = {props.stories[5].article_color}
          </ArticleCard>
        </RightBox>
        <Shelf></Shelf>
      </Container2>
      <Container1>
        <Box>
          <ArticleCard>
            article_title = {props.stories[6].article_title}
            article_image = {props.stories[6].article_image}
            article_url = {props.stories[6].article_url}
            article_byline = {props.stories[6].article_byline}
            article_color = {props.stories[6].article_color}
          </ArticleCard>
        </Box>
        <Shelf></Shelf>
      </Container1>
      <Container2>
        <LeftBox>
          <ArticleCard>
            article_title = {props.stories[7].article_title}
            article_image = {props.stories[7].article_image}
            article_url = {props.stories[7].article_url}
            article_byline = {props.stories[7].article_byline}
            article_color = {props.stories[7].article_color}
          </ArticleCard>
        </LeftBox>
        <RightBox>
          <ArticleCard>
            article_title = {props.stories[8].article_title}
            article_image = {props.stories[8].article_image}
            article_url = {props.stories[8].article_url}
            article_byline = {props.stories[8].article_byline}
            article_color = {props.stories[8].article_color}
          </ArticleCard>
        </RightBox>
        <Shelf></Shelf>
      </Container2>
      <Container1>
        <Box>
          <ArticleCard>
            article_title = {props.stories[9].article_title}
            article_image = {props.stories[9].article_image}
            article_url = {props.stories[9].article_url}
            article_byline = {props.stories[9].article_byline}
            article_color = {props.stories[9].article_color}
          </ArticleCard>
        </Box>
        <Shelf></Shelf>
      </Container1>
      <Container2>
        <LeftBox>
          <ArticleCard>
            article_title = {props.stories[10].article_title}
            article_image = {props.stories[10].article_image}
            article_url = {props.stories[10].article_url}
            article_byline = {props.stories[10].article_byline}
            article_color = {props.stories[10].article_color}
          </ArticleCard>
        </LeftBox>
        <RightBox>
          <ArticleCard>
            article_title = {props.stories[11].article_title}
            article_image = {props.stories[11].article_image}
            article_url = {props.stories[11].article_url}
            article_byline = {props.stories[11].article_byline}
            article_color = {props.stories[11].article_color}
          </ArticleCard>
        </RightBox>
        <Shelf></Shelf>
      </Container2>
      <Container1>
        <Box>
          <ArticleCard>
            article_title = {props.stories[12].article_title}
            article_image = {props.stories[12].article_image}
            article_url = {props.stories[12].article_url}
            article_byline = {props.stories[12].article_byline}
            article_color = {props.stories[12].article_color}
          </ArticleCard>
        </Box>
        <Shelf></Shelf>
      </Container1>
    </OuterContainer>
  );
}
