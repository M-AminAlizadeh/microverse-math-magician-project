import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Quote', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Quote />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});