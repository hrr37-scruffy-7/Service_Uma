import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';
import sampleData from '../client/src/sampleData.js';
import App from '../client/src/components/App.jsx';

let options = {
  headers: { 'access-control-allow-origin': '*' }
};
Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    let dummyPic = sampleData[0];

    const component = shallow(<App data={dummyPic}/>);

    expect(component.exists()).toBe(true);
  });
});