import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu.js'

describe('Menu', () => {
  it('renders an indication of Menu', () => {
    const wrapper = shallow(<Menu
      updateSource={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  })
  it('should call the searchArticles prop with the search value when the button is clicked', () => {
    const mockUpdateSource = jest.fn();
    const wrapper = shallow(
      <Menu
        updateSource={mockUpdateSource}
      />
    );
    wrapper.find('button').at(0).simulate('click');
    expect(mockUpdateSource).toHaveBeenCalled();
  })
})
