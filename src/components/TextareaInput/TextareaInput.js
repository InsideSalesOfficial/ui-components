import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { get, size } from 'lodash';

import {
  colors,
  typography,
  darkScrollbar,
  lightScrollbar,
  renderThemeIfPresentOrDefault,
  ifThemeInPropsIsPresentUse,
} from '../styles';
import { defaultTheme, themeToThemeResolver } from './TextareaInputThemes'

const TextareaInputWrapper = styled.div`
  width: 100%;
`;

const TextareaBox = styled.div`
  background-color: ${props => themeToThemeResolver({ key: 'background', theme: props.theme })};
  border: thin solid ${colors.black40};
  border-color: ${(props) => {
    if (props.error) {
      return themeToThemeResolver({ key: 'errorBorderColor', theme: props.theme });
    } else if (props.isFocused) {
      return themeToThemeResolver({ key: 'focusedBorderColor', theme: props.theme });
    } else if (props.disabled) {
      return themeToThemeResolver({ key: 'disabledBorderColor', theme: props.theme });
    } else if (props.lineColor) props.lineColor;
    return themeToThemeResolver({ key: 'borderColor', theme: props.theme });
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
        background-color: ${themeToThemeResolver({ key: 'disabledBackgroundColor', theme: props.theme })};
        label {
          color: ${themeToThemeResolver({ key: 'disabledColor', theme: props.theme })};
        }
      `;
    }
  }}
  `;

function generateAreaScrollbar(theme) {
  if (theme.textAreaInputWhiteTheme) return darkScrollbar;
  return lightScrollbar;
}

const Textarea = styled.textarea`
background-color: transparent;
border: none;
color: ${(props) => themeToThemeResolver({ key: 'valueColor', theme: props.theme })};
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

  ${(props) => ifThemeInPropsIsPresentUse({ props, value: lightScrollbar, defaultValue: generateAreaScrollbar(props.theme) })}
  ${(props) => ifThemeInPropsIsPresentUse({ props, value: `&::-webkit-scrollbar-thumb { background-color: ${props.theme.white10}; }` })}

  &::-webkit-input-placeholder {
    color: ${props => themeToThemeResolver({ key: 'placeholderColor', theme: props.theme })};
  }
`;

const TextLabel = styled.label`
color: ${(props) => {
    if (props.error) {
      return themeToThemeResolver({ key: 'labelErrorColor', theme: props.theme });
    } else if (props.isFocused) {
      return themeToThemeResolver({ key: 'labelFocusedColor', theme: props.theme });
    } else if (props.labelColor) return props.labelColor;

    return themeToThemeResolver({ key: 'labelColor', theme: props.theme });
  }};
top: ${(props) => {
    if (props.error || props.isFocused || props.placeholder) {
      return '-1px';
    }
    return '0';
  }};;
left: ${(props) => {
    if (props.error || props.isFocused || props.placeholder) {
      return '15px';
    }
    return '16px';
  }};
position: absolute;
transform: ${(props) => {
    if (props.open || props.isFocused || props.placeholder) {
      return 'translateY(8px)';
    } else {
      return 'translateY(16px)';
    }
  }};
transition: font-size 0.14s ease-in-out, transform 0.14s ease-in-out, color 0.14s ease-in-out;
${(props) => {
    if (props.open || props.isFocused || props.placeholder) {
      return typography.caption
    } else {
      return typography.subhead1
    }
  }}
line-height: 16px;
`;

const charCountTextWidth = '110px';

export const CharCounterText = styled.div`
${typography.caption}
color: ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.green })};
text-align: right;
width: ${charCountTextWidth};
`;

export const CharCounterErrorText = styled(CharCounterText)`
color: ${renderThemeIfPresentOrDefault({ key: 'warning04', defaultValue: colors.red })};
`;

export const FooterTextContainer = styled.div`
  color: ${renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.black40 })};
  padding-top: 4px;
  ${typography.caption}
  display: flex;
  justify-content: space-between;
`;

export const HelperTextContainer = styled.div`
  width:${props => props.hasCharLimit ? `calc(100% - ${charCountTextWidth})` : '100%'};
`;

export const HelperText = styled.span`
  color: ${props => themeToThemeResolver({ key: 'helperColor', theme: props.theme })};
  ${typography.caption}
`;

const HelperErrorText = styled(HelperText)`
  color: ${renderThemeIfPresentOrDefault({ key: 'warning04', defaultValue: colors.red })};
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
  const { charLimit, error, localError } = props;
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
      focused: false,
      value: ''
    };
  }

  componentDidMount() {
    const { value } = this.props;

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
    if (!this.state.cancelBlur) {
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
    const localError = this.determineLocalError();
    return <ErrorTextContainer localError={localError} charLimit={charLimit} error={error} />;
  };

  determineLocalError = () => {
    const { charLimit } = this.props;
    const value = get(this.state, 'value', get(this.props, 'value', ''));
    if (charLimitExceeded(charLimit, value)) {
      return CharLimitExceededError;
    }
    return '';
  };

  renderHelperText = () => {
    const { error, helper, collapsed, charLimit } = this.props;
    const localError = this.determineLocalError();

    if (collapsed && !this.state.value && !this.state.focused && !(error || localError || helper)) {
      return null;
    }

    if (error || localError) {
      return this.renderErrorText();
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

  setValue = (value) => {
    this.setState({ value });
  };

  render() {
    const { className, label, name, error, disabled, collapsed, labelColor, lineColor, placeholder } = this.props;
    const localError = this.determineLocalError();

    return (
      <ThemeProvider theme={this.props.theme}>
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
              className="pb-test__textarea-input"
              id={name}
              name={name}
              disabled={disabled}
              error={error || localError}
              value={this.state.value}
              ref={(input) => { this.textareaInput = ReactDOM.findDOMNode(input); }}
              onChange={this.onChange}
              placeholder={placeholder}>
            </Textarea>
            <TextLabel
              isFocused={this.state.focused}
              labelColor={labelColor}
              open={this.state.value}
              htmlFor={name}
              error={error || localError}
              placeholder={placeholder}>
              {label}
            </TextLabel>
          </TextareaBox>
          {this.renderFooterText()}
        </TextareaInputWrapper>
      </ThemeProvider>
    );
  }
}

TextareaInput.defaultProps = {
  label: 'Label',
  charLimit: 0,
  error: '',
  placeholder: '',
  theme: defaultTheme
};

TextareaInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  helper: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  collapsed: PropTypes.bool,
  charLimit: PropTypes.number,
  placeholder: PropTypes.string,
  theme: PropTypes.object
};

export default TextareaInput;
