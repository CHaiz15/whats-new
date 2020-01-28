import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsData: {
        entertainment: entertainment,
        health: health,
        local: local,
        science: science,
        technology: technology,
      },
      currentSource: 'local',
    };
  };
  updateSource = (event) => {
    this.setState({currentSource: event.target.name})
  }
  render() {
    return (
      <div className="app">
        <Menu updateSource={this.updateSource}/>
        <NewsContainer localNews={this.state.newsData[this.state.currentSource]} />
      </div>
    );
  }
}

export default App;
