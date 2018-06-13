import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import _ from 'lodash';
import TextareaInput, { TextareaHelper, ErrorTextContainer, charLimitExceeded, CharLimitExceededError, determineCharCounterTextValue, CharCounterText, CharCounterErrorText } from './TextareaInput';

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

  it('renderErrorText should return HelperTextContainer if there is an error', () => {
    const error = 'some error';
    const wrapper = shallow(<TextareaInput name="test" error={error}/>);
    
    const errorText = wrapper.instance().renderErrorText();

    expect(errorText).toEqual(<ErrorTextContainer charLimit={0} error={error} localError="" />);
  });

  it('renderErrorText should return HelperTextContainer if there is a charLimit and the value is greater than the charLimit, even if no error is present', () => {
    const localError = CharLimitExceededError;
    const value = 'hello world';
    const charLimit = value.length - 1;
    const wrapper = shallow(<TextareaInput name="test" charLimit={charLimit} value={value}/>);

    const errorText = wrapper.instance().renderErrorText();

    expect(errorText).toEqual(<ErrorTextContainer localError={localError} error='' charLimit={charLimit} />);
  });

  it('renderHelperText should return TextareaHelper if component is not collapsed.', () => {
    const helperTextString = 'help me!';
    const wrapper = shallow(<TextareaInput name="test" helper={helperTextString}/>);
    
    const helperText = wrapper.instance().renderHelperText();

    expect(helperText).toEqual(<TextareaHelper hasCharLimit={false} helper={helperTextString} />);
  });

  it('determineCharCounterTextValue should return counter string if the charLimit is greater than 0', () => {
    const charLimit = 100;
    const inputValue = 'hello';

    const charCounterStr = determineCharCounterTextValue(charLimit, inputValue);

    expect(charCounterStr).toBe(`${_.size(inputValue)} / ${charLimit}`);
  });

  it('determineCharCounterTextValue should return null if charLimit is 0', () => {
    expect(determineCharCounterTextValue(0, 'hello')).toBe(null);
  });

  it('renderCharCounterText should return CharCounterText if charLimit greater than 0 and char limit not reached', () => {
    const charLimit = 100;
    const inputValue = 'hello world';
    const wrapper = shallow(<TextareaInput name="test" value={inputValue} charLimit={charLimit}/>);

    const charCounter = wrapper.instance().renderCharCounterText();
    const charCounterStr = determineCharCounterTextValue(charLimit, inputValue);
    
    expect(charCounter).toEqual(<CharCounterText>{charCounterStr}</CharCounterText>)
  });

  it('renderCharCounterText should return null if charLimit is 0', () => {
    const inputValue = 'hello world';
    const wrapper = shallow(<TextareaInput name="test" value={inputValue}/>);

    const charCounter = wrapper.instance().renderCharCounterText();
    
    expect(charCounter).toBe(null);
  });

  it('renderCharCounterText should return CharCounterText if charLimit greater than 0 and char limit has been passed', () => {
    const charLimit = 10;
    const inputValue = 'hello world, there is some text';
    const wrapper = shallow(<TextareaInput name="test" value={inputValue} charLimit={charLimit}/>);

    const charCounter = wrapper.instance().renderCharCounterText();
    const charCounterStr = determineCharCounterTextValue(charLimit, inputValue);
    
    expect(charCounter).toEqual(<CharCounterErrorText>{charCounterStr}</CharCounterErrorText>)
  });

  it('renderCharCounterText should return null if charLimit is 0', () => {
    const inputValue = 'hello world, there is some text';
    const wrapper = shallow(<TextareaInput name="test" value={inputValue}/>);

    const charCounter = wrapper.instance().renderCharCounterText();
    
    expect(charCounter).toBe(null);
  });

  it('focusOnTextarea should set focused state to true', () => {
    const wrapper = mount(<TextareaInput name="test" />);

    expect(wrapper.state().focused).toBeFalsy();

    wrapper.instance().focusOnTextarea();
    setTimeout(() => {
      expect(wrapper.state().focused).toBeTruthy();
    }, 0);
  });

  it('onContainerMouseDown sets cancelBlur to true on state', () => {
    const wrapper = mount(<TextareaInput name="test" />);
    
    expect(wrapper.state().cancelBlur).toBeFalsy();

    wrapper.instance().focusOnTextarea();
    
    wrapper.instance().cancelBlur();
    expect(wrapper.state().cancelBlur).toBeTruthy();
  });

  it('onContainerMouseUp sets cancelBlur to true on state', () => {
    const wrapper = mount(<TextareaInput name="test" />);
  
    wrapper.instance().focusOnTextarea();

    wrapper.instance().cancelBlur();
    expect(wrapper.state().cancelBlur).toBeTruthy();
    
    wrapper.instance().removeCancelBlur();
    expect(wrapper.state().cancelBlur).toBeFalsy();
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

  it('placeholder prop should set a placeholder on the textarea element', () => {
    const placeholder = 'Hello, I am a placeholder';
    const wrapper = mount(<TextareaInput name="test" placeholder={placeholder} />)
    const instance = wrapper.instance();
    const dom = ReactDOM.findDOMNode(instance);
    const textarea = dom.querySelector('textarea');
    expect(textarea.placeholder).toBe(placeholder);
  });
});


describe('charLimitExceeded', () => {
  it(`should return ${false} if there is no charLimit`, () => {
    expect(charLimitExceeded(0, 'hello world')).toBe(false);
  });

  it(`should return ${false} if the string length is equal to the charLimit`, () => {
    const str = 'hello world';
    const charLimit = str.length;
    expect(charLimitExceeded(charLimit, str)).toBe(false)
  });

  it(`should return ${true} if the string length is greater than the charLimit`, () => {
    const str = 'hello world';
    const charLimit = str.length - 1;
    expect(charLimitExceeded(charLimit, str)).toBe(true);
  });
});
