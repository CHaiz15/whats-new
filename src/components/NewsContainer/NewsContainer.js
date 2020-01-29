import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
  let articles = props.newsSource.map(news => {
    return <NewsArticle key={news.headline} headline={news.headline} img={news.img} url={news.url} description={news.description} />
  })
  return <div className='NewsContainer'>
    {articles}
  </div>;
}

export default NewsContainer;
