import React from 'react'
import { shallow } from 'enzyme'
import NewsArticle from './NewsArticle.js'

describe('NewsArticle', () => {
  it('renders an indication of a NewsArticle', () => {
    const wrapper = shallow(<NewsArticle
      headline='Broncos lose'
      img='bronco.png'
      url='gobroncos.com'
      description='Broncos miss the playoffs'
    />);

    expect(wrapper).toMatchSnapshot();
  })
})
