import React from 'react';
import { mount } from 'enzyme';
import TextareaInput from './TextareaInput';

describe('TextareaInput', () => {
  
  it('componentDidMount should set focusedOrHasValue on state if there are any children', () => {
    const initialValue = true;
    const wrapper = mount(<TextareaInput name="test">Has text here</TextareaInput>);
    
    expect(wrapper.state().hasValue).toEqual(initialValue);

  });
});

