import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BodySection from './BodySection';

const wrapper = shallow(
	<BodySection title='test title'>
		<p>test children node</p>
	</BodySection>
);

it('Renders without crashing', () => {
	shallow(<BodySection />);
});

it('Render correctly the children and one h2 element', () => {
	expect(wrapper.find('div.bodySection').exists()).equal(true);
	expect(wrapper.find('h2').length).equal(1);
	expect(wrapper.find('h2').text()).equal('test title');
	expect(wrapper.find('p').length).equal(1);
	expect(wrapper.find('p').text()).equal('test children node');
});
