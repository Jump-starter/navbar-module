import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import RemindMeButton from '../RemindMeButton.jsx';

describe('RemindMeButton Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<RemindMeButton />).find('#remindMeComponent').length).toEqual(1);
  });

  it('should render a reminderForm when button remindMeButton is clicked', () => {
    const wrapper = shallow(<RemindMeButton />);
    expect(wrapper.find('.reminderFOrmContainerWrapper').length).toEqual(0);
    wrapper.instance().handleFormClick();
    wrapper.update();
    expect(wrapper.find('.reminderFormContainerWrapper').length).toEqual(1);
  });
});