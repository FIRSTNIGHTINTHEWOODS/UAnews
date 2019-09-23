import React from 'react';
import './App.scss';
import HeaderMain from "../HeaderMain/HeaderMain";
import NewsFeed from "../NewsFeed/NewsFeed";

function App() {
  return (
    <div className="main">
      <HeaderMain/>
      <NewsFeed/>
    </div>
  );
}

export default App;
