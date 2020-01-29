import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({headline, img, url, description}) => {
  return (
    <div className='NewsArticle'>
      <img src={img}/>
      <div>
        <h3>{headline}</h3>
        <p>{description}</p>
      </div>
      <div className='site-link'>
        <a href={url}>Click 4 Website</a>
      </div>
    </div>
  );
}


export default NewsArticle;
