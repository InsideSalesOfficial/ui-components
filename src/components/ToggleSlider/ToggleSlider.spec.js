import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import _ from 'lodash';

import ToggleSlider from './ToggleSlider';

describe('ToggleSlider', () => {
  it('toggle is called on click', () => {
    const onToggle = jest.fn();
    
    shallow(<ToggleSlider checked={false} toggle={onToggle} />);

    setTimeout(() => {
      expect(onToggle).toHaveBeenCalled();
    }, 0)
  });
});

describe('ToggleSlider Snapshots', () => {
  test('shows toggled on', () => {
    const tree = renderer.create(<ToggleSlider checked={true} toggle={_.noop} />);
    expect(tree).toMatchSnapshot();
  })
  test('shows toggled off', () => {
    const tree = renderer.create(<ToggleSlider checked={false} toggle={_.noop}/>);
    expect(tree).toMatchSnapshot();
  });
});