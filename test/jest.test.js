let axios = require('axios');
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App.jsx';
let options = {
  headers: { 'access-control-allow-origin': '*' }
};
Enzyme.configure({adapter: new Adapter()});

// const id = '23958457';
// test('check if number of db images for 23958457 is correct', () => {
//   return axios.get(`http://localhost:5002/images/${id}`).then(response => {
//     expect(response.data.length).toBe(12);
//   });
// });

test('if there is a button element', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('button')).toHaveLength(3);
});