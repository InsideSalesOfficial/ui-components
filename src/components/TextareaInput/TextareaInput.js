import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { colors, typography, darkScrollbar } from '../styles';

const TextareaInputWrapper = styled.div`
  width: 100%;
`;

const TextareaBox = styled.div`
  background-color: ${colors.white};
  border: thin solid ${colors.black40};
  border-color: ${(props) => {
    if (props.error) {
      return colors.red;
    } else if (props.isFocused) {
        return colors.green;
    } else if (props.disabled) {
      return colors.black20;
    }
    return colors.black40;
  }};
  border-radius: 4px;
  border-width: ${(props) => {
    if (props.isFocused || props.error) {
      return '2px';
    }
    return '1px';
  }};
  box-sizing: border-box;
  cursor: ${(props) => {
        if (props.disabled) {
          return 'default';
        }
        return 'text';
      }};
  padding-top: ${(props) => {
    if (props.error || props.isFocused) {
      return '27px';
    } else {
      return '28px';
    }
  }};
  height: 100px;
  min-height: 100px;
  position: relative;
  transition: border-color 0.14s ease-in-out;
  width: 100%;

  &:hover {
    border-width: ${(props) => {
      if (props.disabled) {
        return '1px';
      }
      return '2px';
    }};
    padding-top: ${(props) => {
      if (props.disabled) {
        return '28px';
      }
      return '27px';
    }};

    textarea {
      padding: ${(props) => {
        if ((props.error || props.isFocused || props.open) && !props.disabled) {
          return '0 15px';
        } else {
          return '0 16px';
        }
      }};
    }

    label {
      left: ${(props) => {
        if (props.disabled) {
          return '16px';
        }
        return '15px';
      }};
      top: ${(props) => {
        if (props.disabled) {
          return '0';
        }
        return '-1px';
      }};
    }
  }

  ${(props) => {
    if (props.disabled) {
      return `
        background-color: ${colors.black05};
        label {
          color: ${colors.black40};
        }
      `;
    }
  }}
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  height: 100%;
  padding: ${(props) => {
    if (props.error || props.isFocused) {
      return '0 15px';
    } else {
      return '0 16px';
    }
  }};
  resize: none;
  text-align: left;
  width: 100%;
  
  &:focus {
    outline: 0;
    padding: 0 15px;
  }
  ${typography.subhead1}
  ${darkScrollbar}
`;

const TextLabel = styled.label`
  color: ${(props) => {
      if (props.error) {
        return colors.red;
      } else if (props.isFocused) {
        return colors.green;
      } else {
        return colors.black60;
      }
    }};
  top: ${(props) => {
    if (props.error || props.isFocused) {
      return '-1px';
    }
    return '0';
  }};;
  left: ${(props) => {
    if (props.error || props.isFocused) {
      return '15px';
    }
    return '16px';
  }};
  position: absolute;
  transform: ${(props) => {
    if (props.open || props.isFocused) {
      return 'translateY(8px)';
    } else {
      return 'translateY(16px)';
    }
  }};
  transition: font-size 0.14s ease-in-out, transform 0.14s ease-in-out, color 0.14s ease-in-out;
  ${(props) => {
    if (props.open || props.isFocused) {
      return typography.caption
    } else {
      return typography.subhead1
    }
  }}
  line-height: 16px;
`;

const TextareaHelper = styled.div`
  color: ${colors.black40};
  ${typography.caption}
`;

const TextareaError = styled(TextareaHelper)`
  color: ${colors.red};
`;

class TextareaInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasValue: false,
      focused: false
    };
  }

  componentDidMount() {
    if (this.props.children) {
      this.setState({
        hasValue: true
      });
    }
  }

  focused = () => {
    this.setState({
      focused: true
    })
  }

  blurred = (e) => {
    if (_.get(e, 'target.value', false)) {
      this.setState({
        hasValue: true
      })
    }
    else {
      this.setState({
        hasValue: false
      })
    }
    this.setState({
      focused: false
    })
  }

  renderHelperText() {
    const { error, helper } = this.props;
    if (error) {
      return (<TextareaError>{error}</TextareaError>);
    }
    return (<TextareaHelper>{helper}</TextareaHelper>);
  }

  focusOnTextarea = () => {
    if (this.textareaInput !== document.activeElement) {
      this.textareaInput.focus();
    }
  }

  preventLostFocus = (e) => {
    if (this.textareaInput === document.activeElement) {
      e.preventDefault();
    }
  }

  render() {
    const { label, name, error, disabled, children } = this.props;
    return (
      <TextareaInputWrapper>
        <TextareaBox
          onMouseDown={this.preventLostFocus}
          onClick={this.focusOnTextarea}
          isFocused={this.state.focused}
          error={error}
          open={this.state.hasValue}
          disabled={disabled}>
          <Textarea
            onFocus={this.focused}
            onBlur={this.blurred}
            id={name} name={name}
            disabled={disabled}
            error={error}
            value={children}
            ref={(input) => { this.textareaInput = ReactDOM.findDOMNode(input); }}>
          </Textarea>
          <TextLabel isFocused={this.state.focused} open={this.state.hasValue} htmlFor={name} error={error}>{label}</TextLabel>
        </TextareaBox>
        {this.renderHelperText()}
      </TextareaInputWrapper>
    );
  }
}

TextareaInput.defaultProps = {
  name: 'Name',
  label: 'Label'
};

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helper: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string
};

export default TextareaInput;
