import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Blurb from './components/Blurb';

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
  

  return data && (
    <Blurb description_text={data.description_text}/>
  );
}

export default App;
