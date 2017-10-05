import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';

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
    if (!props.open && !props.isFocused && props.collapsed) {
      return 0;
    } else if (props.error || props.isFocused) {
      return '27px';
    }
    
    return '28px';
  }};
  height: ${(props) => {
    if (!props.open && !props.isFocused && !props.error && props.collapsed) return '50px';

    return '100px';
  }};
  min-height: ${(props) => {
    if (!props.open && !props.isFocused && !props.error && props.collapsed) return '50px';

    return '100px';
  }};
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
      if (!props.open && !props.isFocused && props.collapsed) {
        return 0;
      } else if (props.disabled) {
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

export const TextareaHelper = styled.div`
  color: ${colors.black40};
  padding-top: 4px;
  ${typography.caption}
`;

export const TextareaError = styled(TextareaHelper)`
  color: ${colors.red};
`;

class TextareaInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  componentDidMount() {
    const {value} = this.props;

    if (value) {
      this.setState({
        value
      });
    }
  }

  focused = () => {
    this.setState({
      focused: true
    })
  }

  blurred = () => {
    if(!this.state.cancelBlur) {
      this.setState({
        focused: false
      });
    }
  }

  renderHelperText = () => {
    const { error, helper, collapsed } = this.props;

    if (collapsed && !this.state.value && !this.state.focused && !error) {
      return null;
    }

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

  onContainerMouseDown = (e) => {
    if (this.textareaInput === document.activeElement) {
      this.setState({
        cancelBlur: true
      });
    }
  }

  onContainerMouseUp = (e) => {
    this.setState({
      cancelBlur: false
    });
  }

  onChange = (e) => {
    if (e) {
      e.preventDefault();
    }

    this.setState({
      value: get(e, 'target.value', this.textareaInput.value)
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
  }

  render() {
    const { label, name, error, disabled, collapsed } = this.props;
    return (
      <TextareaInputWrapper>
        <TextareaBox
          onMouseDown={this.onContainerMouseDown}
          onMouseUp={this.onMouseUp}
          onClick={this.focusOnTextarea}
          isFocused={this.state.focused}
          error={error}
          open={this.state.value}
          disabled={disabled}
          collapsed={collapsed}>
          <Textarea
            onFocus={this.focused}
            onBlur={this.blurred}
            id={name}
            name={name}
            disabled={disabled}
            error={error}
            value={this.state.value}
            ref={(input) => { this.textareaInput = ReactDOM.findDOMNode(input); }}
            onChange={this.onChange}>
          </Textarea>
          <TextLabel isFocused={this.state.focused} open={this.state.value} htmlFor={name} error={error}>{label}</TextLabel>
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  collapsed: PropTypes.bool
};

export default TextareaInput;
