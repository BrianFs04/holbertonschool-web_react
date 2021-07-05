import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('test that App renders without crashing', () => {
	shallow(<App />);
});
