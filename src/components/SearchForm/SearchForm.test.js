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
})
