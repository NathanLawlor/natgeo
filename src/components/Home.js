import React, { Component } from 'react';
import Header from './Header';
import Info from './Info';
import ExploreList from './ExploreList';
import Image from './Image';
import '../styles/App.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Info />
        <Image />
        <ExploreList />
      </div>    
    );
  }
}

export default Home;