import React from 'react';
import { mount } from 'enzyme';
import TextareaInput from './TextareaInput';

describe('TextareaInput', () => {
  
  it('componentDidMount should set value on state if there is a value prop', () => {
    const text = 'Has text here';
    const wrapper = mount(<TextareaInput name="test" value={text} />);

    expect(wrapper.state().value).toBe(text);
  });
});

