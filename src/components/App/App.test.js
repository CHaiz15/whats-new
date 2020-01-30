import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;
  const mockAddIdea = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App />)
})
  it('renders an App', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('it should have default state', () => {
    expect(wrapper.state('searchValue')).toEqual('');
    expect(wrapper.state('currentSource')).toEqual('local');
  });
  it('should update currentSource when updateSource is called', () => {
    const mockSourceEvent = {target:{name: 'local'}};
    const expectedSource = 'local';
    wrapper.instance().updateSource(mockSourceEvent);
    expect(wrapper.state('currentSource')).toEqual(expectedSource);
  })
  it('should filter articles when searchArticles is called', () => {
    const mockPreventDefault = {preventDefault: jest.fn()};
    const mockSearchValue = 'band';
    wrapper.instance().searchArticles(mockSearchValue, mockPreventDefault);
    expect(wrapper.state('currentSource')).toEqual('filtered');
  })
  it('should update searchValue when updateSearchInput is called', () => {
    const mockSearchInput = {target:{value: 'Car'}};
    const expectedSearch = 'Car';
    wrapper.instance().updateSearchInput(mockSearchInput);
    expect(wrapper.state('searchValue')).toEqual(expectedSearch);
  })
})
