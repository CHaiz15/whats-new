import React from 'react'
import { shallow } from 'enzyme'
import NewsContainer from './NewsContainer.js'

describe('NewsContainer', () => {
  it('renders an indication of no newsSource', () => {
    const wrapper = shallow(<NewsContainer
      newsSource={[]}
    />);

    expect(wrapper).toMatchSnapshot();
  })
  it('renders an indication of newsSource', () => {
    const wrapper = shallow(<NewsContainer
      newsSource={[{headline:'Broncos lose', img:'bronco.png', url:'gobroncos.com', description:'Broncos miss the playoffs'}]}
    />);

    expect(wrapper).toMatchSnapshot();
  })
})
