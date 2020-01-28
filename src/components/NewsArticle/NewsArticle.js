import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className='NewsArticle'>
      <img src={props.img}/>
      <div>
        <h3>{props.headline}</h3>
        <p>{props.description}</p>
      </div>
      <div className='site-link'>
        <a href={props.url}>Click 4 Website</a>
      </div>
    </div>
  );
}


export default NewsArticle;
