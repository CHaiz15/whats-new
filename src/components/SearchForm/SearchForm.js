import React from 'react';
import './SearchForm.css';

const SearchForm = ({searchArticles, searchValue, updateSearchInput}) => {
  return (
    <form className='search-container'>
      <h3>Search Articles:</h3>
      <input
      className='SearchForm'
      type='text'
      placeholder='Type here...'
      value={searchValue}
      onChange={updateSearchInput}
      />
      <button onClick={(event) => searchArticles(searchValue, event)}>Search</button>
    </form>
  )
}

export default SearchForm;
