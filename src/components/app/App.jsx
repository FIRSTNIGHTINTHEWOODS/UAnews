import React from 'react';
import './App.scss';
import HeaderMain from "../HeaderMain/HeaderMain";
import NewsFeed from "../NewsFeed/NewsFeed";
import InfoBlock from "../InfoBlock/InfoBlock";

function App() {
  return (
    <div className="main">
      <HeaderMain/>
      <div className='content-wrapper'>
        <InfoBlock/>
        <NewsFeed/>
      </div>
    </div>
  );
}
export default App;
