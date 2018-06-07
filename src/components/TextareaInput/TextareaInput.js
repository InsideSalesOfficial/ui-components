import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get, size } from 'lodash';

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
    } else if (props.lineColor) {
      return props.lineColor;
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
      } else if (props.labelColor) {
        return props.labelColor;
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

const CharCountTextWidth = '110px';

export const CharCounterText = styled.div`
  ${typography.caption}
  color: ${colors.green};
  text-align: right;
  width: ${CharCountTextWidth};
`;

export const CharCounterErrorText = styled(CharCounterText)`
  color: ${colors.red};
`;

export const FooterTextContainer = styled.div`
  color: ${colors.black40};
  padding-top: 4px;
  ${typography.caption}
  display: flex;
  justify-content: space-between;
`;

export const HelperTextContainer = styled.div`
  width:${props => props.hasCharLimit ? 'calc(100% - ${CharCountTextWidth})' : '100%'};
`;

export const HelperText = styled.span`
  ${typography.caption}
`;

const HelperErrorText = styled(HelperText)`
  color: ${colors.red};
`;

/**
 * Indicates if the string value has exceeded the char limit
 * @param {number} charLimit
 * @param {string} value
 */
export function charLimitExceeded(charLimit, value) {
  if (charLimit === 0 || size(value) === 0) {
    return false;
  }
  return size(value) > charLimit;
}

/**
 * Returns the char counter text string
 * @param {number} charLimit
 * @param {string} value
 */
export function determineCharCounterTextValue(charLimit, value) {
    if (!charLimit) return null;
    
    return `${size(value)} / ${charLimit}`;
}

export const ErrorTextContainer = (props) => {
  const { charLimit, error, localError } = this.props;
  return (
    <HelperTextContainer hasCharLimit={charLimit > 0}>
      {(error || localError) &&
      <HelperErrorText>{error || localError}</HelperErrorText>}
    </HelperTextContainer>
  );
};

export const TextareaHelper = (props) => {
  const { hasCharLimit, helper } = props;
  return (
    <HelperTextContainer hasCharLimit={hasCharLimit}>
      <HelperText>{helper}</HelperText>
    </HelperTextContainer>
  );
};

export const CharLimitExceededError = 'Character limit exceeded';

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

  renderCharCounterText = () => {
    const inputValue = get(this.state, 'value', get(this.props, 'value', ''));
    const { charLimit } = this.props;
    if (!charLimit) return null;

    const charTextValue = determineCharCounterTextValue(charLimit, inputValue);

    if (charLimitExceeded(charLimit, inputValue)) {
      return (
        <CharCounterErrorText>{charTextValue}</CharCounterErrorText>
      );
    }

    return (
      <CharCounterText>{charTextValue}</CharCounterText>
    );
  };

  renderFooterText = () => {
    return (
      <FooterTextContainer>
        {this.renderHelperText()}
        {this.renderCharCounterText()}
      </FooterTextContainer>
    );
  };

  renderErrorText = () => {
    const { charLimit, error } = this.props;
    const localError = this.setLocalError();
    return (
      <ErrorTextContainer localError={localError} charLimit={charLimit} error={error} />
    );
  };
  
  setLocalError = () => {
    const { charLimit } = this.props;
    const value = get(this.state, 'value', get(this.props, 'value', ''));
    if (charLimitExceeded(charLimit, value)) {
      return CharLimitExceededError;
    }
    return '';
  };

  renderHelperText = () => {
    const { error, helper, collapsed, charLimit } = this.props;
    const localError = this.setLocalError();

    if (collapsed && !this.state.value && !this.state.focused && !(error || localError || helper)) {
      return null;
    }

    if (error || localError) {
      this.renderErrorText();
    }

    return <TextareaHelper hasCharLimit={charLimit > 0} helper={helper} />;
  }

  focusOnTextarea = () => {
    if (this.textareaInput !== document.activeElement) {
      this.textareaInput.focus();
    }
  }

  cancelBlur = (e) => {
    this.setState({
      cancelBlur: true
    });
  }

  removeCancelBlur = () => {
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
    const { className, label, name, error, disabled, collapsed, labelColor, lineColor } = this.props;
    const localError = this.setLocalError();

    return (
      <TextareaInputWrapper className={className}>
        <TextareaBox
          onMouseUp={this.removeCancelBlur}
          onMouseDown={this.cancelBlur}
          onMouseLeave={this.removeCancelBlur}
          onClick={this.focusOnTextarea}
          lineColor={lineColor}
          isFocused={this.state.focused}
          error={error || localError}
          open={this.state.value}
          disabled={disabled}
          collapsed={collapsed}>
          <Textarea
            onFocus={this.focused}
            onBlur={this.blurred}
            id={name}
            name={name}
            disabled={disabled}
            error={error || localError}
            value={this.state.value}
            ref={(input) => { this.textareaInput = ReactDOM.findDOMNode(input); }}
            onChange={this.onChange}>
          </Textarea>
          <TextLabel isFocused={this.state.focused} labelColor={labelColor} open={this.state.value} htmlFor={name} error={error || localError}>{label}</TextLabel>
        </TextareaBox>
        {this.renderFooterText()}
      </TextareaInputWrapper>
    );
  }
}

TextareaInput.defaultProps = {
  name: 'Name',
  label: 'Label',
  charLimit: 0,
  error: ''
};

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helper: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  collapsed: PropTypes.bool,
  charLimit: PropTypes.number
};

export default TextareaInput;
