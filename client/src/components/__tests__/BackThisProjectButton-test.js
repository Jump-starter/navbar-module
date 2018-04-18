import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import BackThisProjectButton from '../BackThisProjectButton.jsx';

describe('BackThisProjectButton Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<BackThisProjectButton />).find('#backThisProject').length).toEqual(1);
  });
});