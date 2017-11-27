import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {typography} from '../styles/typography';
import {colors} from '../styles/colors';
// import _ from 'lodash';

// import { colors, typography } from '../styles';

// import { OverflowWrapper } from './SelectInputThemes';
// import { SelectOptionHeight } from './SelectOptions';

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

  render() {
    const { toggleOptionsList, inputChange, displayValue } = this.props;

    return (
      <InputWrapper>
        <TextInput type="text" value={displayValue} onChange={inputChange}
          ref={(input) => { this.textInput = ReactDOM.findDOMNode(input); }} />
        <OpenOptions onClick={toggleOptionsList} />
      </InputWrapper>
    );
  }
}

// EditableTextInput.propTypes = {
//   label: PropTypes.any.isRequired,
//   onClick: PropTypes.func.isRequired,
//   value: PropTypes.string
// };

// EditableTextInput.defaultProps = {
//   label: 'Select',
//   onClick: () => {},
//   value: 'select',
// };

export default EditableTextInput;
