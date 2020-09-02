import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography, colors, renderThemeKeyOrDefaultValue } from '../styles';

const Wrapper = styled.label`
  transition: all 200ms;
  transform: translateY(-50%);
  position: absolute;
  left: 16px;
  top: ${(props) => (props.isOptionSelected ? '30%' : '50%')};
  ${labelColor}
  ${(props) => props.isOptionSelected && typography.caption}
`;

function labelColor(props) {
  if (props.isDisabled)
    return `color: ${renderThemeKeyOrDefaultValue({ props, key: 'white40', defaultValue: colors.white40 })};`;
  if (props.error)
    return `color: ${renderThemeKeyOrDefaultValue({ props, key: 'warning04', defaultValue: colors.red })};`;
  return `color: ${renderThemeKeyOrDefaultValue({ props, key: 'white90', defaultValue: colors.white90 })};`;
}

function Label({ error, isDisabled, isOptionSelected, label }) {
  return (
    <Wrapper error={error} isDisabled={isDisabled} isOptionSelected={isOptionSelected}>
      {label}
    </Wrapper>
  );
}

Label.propTypes = {
  error: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isOptionSelected: PropTypes.bool.isRequired,
  label: PropTypes.any,
};

export default Label;
