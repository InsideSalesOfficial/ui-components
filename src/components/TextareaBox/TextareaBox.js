import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { colors, typography, darkScrollbar } from '../styles';

import TextInput, { TextBox, TextLabel } from '../TextInput/TextInput';

const padding = '16px';

const TextareaBoxWrapper = styled.div`
  width: 100%;
  position: relative;

  ${props => props.disabled && `
    opacity: 0.6;
  `}
`;

const TextBoxFilled = styled(TextBox)`
  background: ${colors.lighterGray};
  height: ${props => props.isFocused || props.open ? 'auto' : '56px' };
  border-radius: 2px;
  min-height: 59px;

  &, &:hover {
    padding: 22px ${padding} 0 ${padding};
    border-bottom: 2px solid ${props => {
      if(props.error) return colors.red;
      if(props.isFocused) return colors.green;
      return colors.black40;
    }};
  }
`

const TextBoxLabel = styled(TextLabel)`
  transition: all 200ms;
  left: ${padding};
  transform: translateY(-50%);
  top: ${props => props.isFocused || props.open ? `${56 * 0.3}px` : '50%' };
  border-width: 0;
`;

const Chars = styled.div`
  color: ${props => {
    if(props.error) return colors.red;
    return colors.green;
  }};
  text-align: right;
  padding: 0.25em 0;
  ${typography.caption}
`;

const InputBoxStyles = `
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  overflow: auto;
  resize: none;
  text-align: left;
  width: 100%;
  word-break: break-word;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  ${darkScrollbar};
  ${typography.caption}
  &:focus {
    outline: 0;
  }


  ${typography.subhead1}
  max-height: initial;
`

const TextareaBoxField = styled.textarea`
  ${InputBoxStyles}
  min-height: ${props => props.focused ? '89px' : '24px'};
  height: ${props => {
    let filledHeight = props.filledHeight;

    if (props.value.substr(props.value.length - 1, props.value.length) === "\n") {
      filledHeight += 24;
    }

    return `${filledHeight}px`;
  }};
`;

const TextareaMeasuring = styled.div`
  ${InputBoxStyles}
  position: absolute;
  top: 0;
  z-index: -1;
  visibility: hidden;
  white-space: pre-wrap;
  left: ${padding};
  right: ${padding};
  width: auto;
`;

class TextareaBox extends TextInput {
  onChange = (e) => {
    if (e) {
      e.preventDefault();
    }

    this.setState({
      rows: _.get(e, 'target.rows', 0),
      value: _.get(e, 'target.value', this.textInputEl.value, '').slice(0, this.props.max),
    }, () => {
      this.setState({
        filledHeight: _.get(this.measuringDivEl, 'clientHeight', 0),
      })
      this.handleValueChange(this.state.value)
    });
  }

  componentDidMount() {
    const {value} = this.props;
    if (value) {
      this.setState({
        value,
      }, () => {
        this.setState({
          filledHeight: _.get(this.measuringDivEl, 'clientHeight', 0),
        })
      });
    }
  }

  render() {
    const { label, name, disabled, collapsed, className } = this.props;
    const value = this.state.value.slice(0, this.props.max);
    const error = this.props.error || (this.props.max && _.size(this.state.value) > this.props.max)
    return (
      <TextareaBoxWrapper
        className={className}
        disabled={this.props.disabled}
        >
        <TextBoxFilled
          onMouseUp={this.removeCancelBlur}
          onMouseDown={this.cancelBlur}
          onMouseLeave={this.removeCancelBlur}
          onClick={this.focusOnTextInput}
          isFocused={this.state.focused}
          error={error}
          open={this.state.value}
          disabled={disabled}
          rows={this.state.rows}
          collapsed={collapsed}
          focused={this.state.focused}>
          <TextareaMeasuring
            ref={(el) => { this.measuringDivEl = ReactDOM.findDOMNode(el); }}
            value={value}
          >{value}</TextareaMeasuring>
          <TextareaBoxField
            onFocus={this.focused}
            onBlur={this.blurred}
            id={name}
            filledHeight={this.state.filledHeight}
            name={name}
            disabled={disabled}
            error={error}
            value={value}
            ref={(el) => { this.textInputEl = ReactDOM.findDOMNode(el); }}
            onChange={this.onChange}
            focused={this.state.focused}/>
          <TextBoxLabel isFocused={this.state.focused} open={this.state.value} htmlFor={name} error={error}>{label}</TextBoxLabel>
        </TextBoxFilled>
        {this.state.focused && this.props.max && <Chars error={error}>{`${_.size(this.state.value)} / ${this.props.max}`}</Chars>}

      </TextareaBoxWrapper>
    );
  }
}

TextareaBox.defaultProps = {
  max: 256,
}

TextareaBox.propTypes = {
  max: PropTypes.number,
}

export default TextareaBox