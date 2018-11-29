import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { typography, colors } from '../styles';

import { GREEN_CHECKBOX, GRAY_CHECKBOX } from './CheckboxIcons';
import { defaultTheme } from './CheckboxThemes';

const CheckboxEl = styled.input`
  position: relative;
  height: 18px;
  width: 18px;
  appearance: none;
  border: 2px solid ${colors.aluminum};
  border-radius: 2px;
  cursor: pointer;
  margin: 0;
  margin-right: 16px;
  vertical-align: middle;
  background-repeat: no-repeat;
  &:checked {
    width: 19px;
    margin-right: 15px;
    border: none;
    background-image: url(${GREEN_CHECKBOX});
    &:disabled {
      background-image: url(${GRAY_CHECKBOX});
      background-color: transparent;
    }
  }
  &:disabled {
    background-color: ${colors.aluminum};
    opacity: 0.5;
  }
  &:hover, &:focus {
    border-color: ${colors.green};
  }
  &:focus {
    outline: none;
  }
`;

const Text = styled.label`
  color: ${props => props.theme.labelColor};
  vertical-align: middle;
  ${typography.subhead1}
`;

const Checkbox = ({ label, defaultChecked, checked, disabled, name, onChange, className, theme }) => (
  <ThemeProvider theme={theme}>
    <div className={className}>
      <CheckboxEl onChange={e => e.stopPropagation()} id={name} name={name} type="checkbox" defaultChecked={defaultChecked} checked={checked} disabled={disabled} onClick={ onChange } />
      {label && (
        <Text htmlFor={name}>{label}</Text>
      )}
    </div>
  </ThemeProvider>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.name,
  onChange: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.object
};

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  onChange: _.noop,
  theme: defaultTheme
};

export default Checkbox;
