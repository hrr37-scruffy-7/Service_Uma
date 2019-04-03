import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App.jsx';
let options = {
  headers: { 'access-control-allow-origin': '*' }
};
Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});

// describe('<App />', () => {
//   it('renders 1 <App /> component', () => {
//     let dummyPic = sampleData.imagePath[0];

//     const component = shallow(<App video={dummyPic}/>);

//     expect(component.exists()).toBe(true);
//   });
// });