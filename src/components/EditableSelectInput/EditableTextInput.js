import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {typography} from '../styles/typography';
import {colors} from '../styles/colors';
import _ from 'lodash';

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  border-bottom: 2px solid ${colors.white50};
`;

const TextInput = styled.input`
  width: 100%;
  min-width: 0;
  padding: 0;
  margin-bottom: 6px;
  background-color: transparent;
  border: none;
  color: ${colors.white};
  ${typography.display1}
`;

const OpenOptions = styled.div`
  position: relative;
  width: 32px;
  height: inherit;
  flex-grow: 1;
  flex-shrink: 0;
  background: transparent;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-left: 5px transparent solid;
    border-right: 5px transparent solid;
    border-top: 5px ${colors.white} solid;
  }
`;

class EditableTextInput extends React.Component {

  onChange = (e) => {
    if (this.props.inputChange) {
      this.props.inputChange(_.get(e, 'target.value'));
    }
  }

  handleFocus = () => {
    if (this.props.toggleFocusState) {
      this.props.toggleFocusState(true);
    }
  }

  handleBlur = () => {
    if (this.props.toggleFocusState) {
      this.props.toggleFocusState(false);
    }
  }

  render() {
    const { toggleOptionsList, displayPlaceholder, displayValue, isOptionsDisabled } = this.props;

    return (
      <InputWrapper>
        <TextInput
          type="text"
          className="pb-test__editable-select-input"
          value={displayValue}
          onChange={this.onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={displayPlaceholder} />
        {!isOptionsDisabled &&
          <OpenOptions className="pb-test__editable-select-input-open-options" onClick={toggleOptionsList} />
        }
      </InputWrapper>
    );
  }
}

EditableTextInput.propTypes = {
  toggleOptionsList: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  displayValue: PropTypes.string
};

EditableTextInput.defaultProps = {
  toggleOptionsList: () => {},
  inputChange: () => {}
};

export default EditableTextInput;
