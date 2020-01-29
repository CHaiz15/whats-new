import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu.js'

describe('Menu', () => {
  it('renders an indication Menu', () => {
    const wrapper = shallow(<Menu
      updateSource={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  })
})
