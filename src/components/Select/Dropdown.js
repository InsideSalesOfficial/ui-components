import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { renderThemeKeyOrDefaultValue, colors } from "../styles";
import Option from './Option';
import _ from 'lodash';

const Options = styled.ul`
  background: ${props => renderThemeKeyOrDefaultValue({ props, key: 'primary05', defaultValue: props.theme.background })}
  display: ${props => props.isOpen ? 'block' : 'none'}
  width: 100%;
  max-height: 240px;
  margin: 0;
  padding: 0;
  transform: translateZ(0);
  overflow-y: auto;
  li:first-child {
    margin-top: 8px;
  }
  li:last-child {
    margin-bottom: 8px;
  }
`;

const Spacer = styled.hr`
  border-color: ${props => renderThemeKeyOrDefaultValue({ props, key: 'white40', defaultValue: colors.white40 })}
`;

function renderOptions({
  options,
  promotedOptions,
  onSelect,
  focusedOption,
  selectedOptions,
  isMultiSelect,
}) {
  const combinedOptions = [...promotedOptions, ...options].map((option, index) => {
    return (
      <Option
        key={`select-${option.value}`}
        onClick={onSelect}
        option={option}
        isFocused={focusedOption === index}
        isMultiSelect={isMultiSelect}
        isSelected={isMultiSelect && _.includes(selectedOptions, option.value)}
      />
    )
  });
  if (promotedOptions.length > 0){
    combinedOptions.splice(promotedOptions.length, 0, <Spacer/>)
  }
  return combinedOptions;
}
class Dropdown extends React.Component {
  render() {
    return (
      <Options isOpen={this.props.isOpen} >
        {renderOptions({
          options: this.props.options,
          promotedOptions: this.props.promotedOptions,
          onSelect: this.props.onSelect,
          focusedOption: this.props.focusedOption,
          selectedOptions: this.props.selectedOptions,
          isMultiSelect: this.props.isMultiSelect
        })}
      </Options>
    );
  }
}

Dropdown.defaultProps = {
  onSelect: _.noop,
  isOpen: false,
  isMultiSelect: false
}

Dropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.any,
  })).isRequired,
  promotedOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.any,
  })).isRequired,
  focusedOption: PropTypes.number,
  selectedOptions: PropTypes.any,
  isMultiSelect: PropTypes.bool
};

export default Dropdown;