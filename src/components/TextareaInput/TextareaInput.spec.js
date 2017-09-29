import React from 'react';
import { mount, shallow } from 'enzyme';
import TextareaInput, { TextareaError, TextareaHelper } from './TextareaInput';

describe('TextareaInput', () => {
  
  it('componentDidMount should set value on state if there is a value prop', () => {
    const text = 'Has text here';
    const wrapper = mount(<TextareaInput name="test" value={text} />);

    expect(wrapper.state().value).toBe(text);
  });

  it('focused func sets focused state to true', () => {
    const wrapper = shallow(<TextareaInput name="test" />);

    expect(wrapper.state().focused).toBeFalsy();

    wrapper.instance().focused();
    expect(wrapper.state().focused).toBeTruthy();
  });

  it('blurred func sets focused state to false', () => {
    const wrapper = shallow(<TextareaInput name="test" />);

    wrapper.setState({
      focused: true
    });
    expect(wrapper.state().focused).toBeTruthy();

    wrapper.instance().blurred();
    expect(wrapper.state().focused).toBeFalsy();
  });

  it('renderHelperText should return null if component is collapsed, has no value, and has no error', () => {
    const wrapper = shallow(<TextareaInput name="test" collapsed/>);
    
    const helperText = wrapper.instance().renderHelperText();

    expect(helperText).toBeFalsy();
  });

  it('renderHelperText should return TextareaError if there is an error', () => {
    const error = 'some error';
    const wrapper = shallow(<TextareaInput name="test" error={error}/>);
    
    const helperText = wrapper.instance().renderHelperText();

    expect(helperText).toEqual(<TextareaError>{error}</TextareaError>);
  });

  it('renderHelperText should return TextareaHelper if component is not collapsed.', () => {
    const helperTextString = 'help me!';
    const wrapper = shallow(<TextareaInput name="test" helper={helperTextString}/>);
    
    const helperText = wrapper.instance().renderHelperText();

    expect(helperText).toEqual(<TextareaHelper>{helperTextString}</TextareaHelper>);
  });

  it('focusOnTextarea should set focused state to true', () => {
    const wrapper = mount(<TextareaInput name="test" />);

    expect(wrapper.state().focused).toBeFalsy();

    wrapper.instance().focusOnTextarea();
    setTimeout(() => {
      expect(wrapper.state().focused).toBeTruthy();
    }, 0);
  });

  it('preventLostFocus calls event preventDefault when document activeElement is textarea input', () => {
    jest.useFakeTimers();
    const preventSpy = jest.fn();
    const event = {
      preventDefault: preventSpy
    };

    const wrapper = mount(<TextareaInput name="test" />);
    
    expect(wrapper.state().focused).toBeFalsy();

    wrapper.instance().focusOnTextarea();
    
    setTimeout(() => {
      wrapper.instance().preventLostFocus(event);
      expect(preventSpy).toHaveBeenCalled();
    }, 0);

    jest.runAllTimers();
  });

  it('onChange should set the state with the new value from the input', () => {
    jest.useFakeTimers();
    const onChangePropSyp = jest.fn();
    const preventSpy = jest.fn();
    const newValue = 'Some text';
    const event = {
      preventDefault: preventSpy,
      target: {
        value: newValue
      }
    };

    const wrapper = mount(<TextareaInput name="test" onChange={onChangePropSyp} />);
    
    expect(wrapper.state().value).toBeFalsy();
    
    wrapper.instance().onChange(event);
    
    setTimeout(() => {
      expect(preventSpy).toHaveBeenCalled();
      expect(wrapper.state().value).toEqual(newValue);
      expect(onChangePropSyp).toHaveBeenCalledWith(newValue);
    }, 0);

    jest.runAllTimers();

  });
});

