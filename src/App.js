import React, { useState, useEffect } from "react";
import {isMobile} from 'react-device-detect';
import styled from 'styled-components';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import background from './images/backgroundnew.svg'
import MobileGrid from "./components/MobileGrid";
import RightShelf from "./components/RightShelf"

function App() {
  const [ data, setData ] = useState(null);
  var all_stories = [];

  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/spring-sing-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  if (data)
  {
    all_stories = data.shelf_stories.concat(data.right_stories_1).concat(data.middle_stories).concat(data.left_stories).concat(data.right_stories_2)
    console.log(all_stories)
  }

  const Container = styled.div`
    background-image: url(${background});
  `

  if (isMobile)
  // if (true)
  {
    return data && (
      <div className="App">
        <Header/>
          <Landing landing_image={data.landing_image} landing_credits={data.landing_credits}/>
          <Container>
            <MobileGrid stories={all_stories}/>
          </Container>
        <Footer/>
      </div>
    )

  }

  else
  {
    return data && (
      <div className="App">
        <Header/>
          <Landing landing_image={data.landing_image} landing_credits={data.landing_credits}/>
          <Container>
            YOU ARE ON DESKTOP VIEW
            <RightShelf articles={data.right_stories_1} />
          </Container>
        <Footer/>
      </div>
    )
  }

  // return data && (
  //   <div className="App">
  //       <Header/>
  //         <Landing landing_image={data.landing_image} landing_credits={data.landing_credits}/>
  //         <Container>
  //           <MobileGrid stories={all_stories}/>
  //         </Container>
  //       <Footer/>
  //   </div>
  // );
}

export default App;
