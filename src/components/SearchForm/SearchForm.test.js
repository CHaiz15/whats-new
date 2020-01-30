import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from './SearchForm.js'

describe('SearchForm', () => {
  it('renders an indication of searchForm', () => {
    const wrapper = shallow(<SearchForm
      searchArticles={jest.fn()}
      searchValue={''}
      updateSearchInput={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  })
  it('should call the searchArticles prop with the search value when the button is clicked', () => {
    const mockSearchArticles = jest.fn();
    const wrapper = shallow(
      <SearchForm
        searchArticles={mockSearchArticles}
        searchValue={'Car'}
        updateSearchInput={jest.fn()}
      />
    );
    wrapper.find('button').simulate('click');
    expect(mockSearchArticles).toHaveBeenCalledWith('Car', undefined);
  })
})
