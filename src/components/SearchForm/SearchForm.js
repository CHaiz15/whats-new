import React from 'react';
import './SearchForm.css';

const SearchForm = ({searchArticles, searchValue, updateSearchInput}) => {
  return (
    <div className='search-container'>
      <h3>Search Articles:</h3>
      <input
      className='SearchForm'
      type='text'
      placeholder='Type here...'
      value={searchValue}
      onChange={updateSearchInput}
      />
      <button onClick={() => searchArticles(searchValue)}>Search</button>
    </div>
  )
}

export default SearchForm;
