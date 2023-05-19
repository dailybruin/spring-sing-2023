import styled from 'styled-components'
import React from 'react';

const Container = styled.div`
    display:flex;
    flex-direction: column;
`

const Vinyls = styled.div`
    display: flex;
    width: 60%;
    margin: auto;
    justify-content: space-around;
    flex-direction: row;  
    height: fit-content;
`

const Shelf = styled.div`
  width: 60%;
  height: 5vh;
  background-color: #C08E5F;
  margin: auto;
  border: 2px solid #866B52;
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

const MiddleShelf = (props) => {
  return (
    <React.Fragment>
        <Container>
        <Vinyls>

            {props && props.articles
                  ? props.articles.map((item) => {
                      return (
                        <div>
                      <h1>This is where the card would go</h1>
                      </div>
                      );
                  })
            : null}

        </Vinyls>
        <Shelf/>
        </Container>
    </React.Fragment>
  )
}

export default MiddleShelf;