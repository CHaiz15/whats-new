import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'
import SearchForm from '../SearchForm/SearchForm.js'

let newsData = {
    entertainment: entertainment,
    health: health,
    local: local,
    science: science,
    technology: technology,
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      newsData: newsData,
      currentSource: 'local',
    }
  }
  updateSource = (event) => {
    this.setState({currentSource: event.target.name})
  }
  searchArticles = (searchValue) => {
    let filteredArticles = this.state.newsData[this.state.currentSource].filter(article => {
      return article.headline.toLowerCase().includes(searchValue.toLowerCase())
    })
    this.setState({currentSource: 'filtered', newsData: {...this.state.newsData, filtered: filteredArticles}})
  }
  updateSearchInput = (event) => {
    this.setState({searchValue: event.target.value})
  }
  render() {
    return (
      <div className="app">
        <Menu updateSource={this.updateSource}/>
        <SearchForm searchArticles={this.searchArticles} searchValue={this.state.searchValue} updateSearchInput={this.updateSearchInput}/>
        <NewsContainer newsSource={this.state.newsData[this.state.currentSource]}/>
      </div>
    );
  }
}

export default App;
