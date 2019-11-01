import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  colors,
  typography,
  renderThemeKeyOrDefaultValue,
  renderThemeIfPresentOrDefault,
  ifThemeInPropsIsPresentUse
} from '../styles';

import { defaultTheme } from './CheckboxThemes';

const GREEN_CHECKBOX = generateSvgDataImageWithFill(colors.green);
const GRAY_CHECKBOX = generateSvgDataImageWithFill(colors.grayC);
const GREEN_DISABLED_CHECKBOX = generateSvgDataImageWithFill('#B1E2C9');

function renderThemedDisabledCheckedBackgroundImage(props) {
  return `url(${generateSvgDataImageWithFill(props.theme.white60)})`;
}

function renderThemedCheckedCheckbox(props) {
  return `url(${generateSvgDataImageWithFill(props.theme.brand01)})`;
}


function renderDisabledCheckedBackgroundImage(props) {
  return props.greenDisabled ? `url(${GREEN_DISABLED_CHECKBOX})` : `url(${GRAY_CHECKBOX})`
}

const CheckboxEl = styled.input`
  position: relative;
  height: 18px;
  width: 18px;
  appearance: none;
  border: 2px solid ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.aluminum })};
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
    background-image: ${props => ifThemeInPropsIsPresentUse({ props, value: renderThemedCheckedCheckbox(props), defaultValue: `url(${GREEN_CHECKBOX})`})};
    &:disabled {
      background-image: ${props => ifThemeInPropsIsPresentUse({ props, value: renderThemedDisabledCheckedBackgroundImage(props), defaultValue: renderDisabledCheckedBackgroundImage(props)})};
      background-color: transparent;
    }
    &:greenDisabled {
      ${props => ifThemeInPropsIsPresentUse({ props, defaultValue: `background-image: url(${GREEN_DISABLED_CHECKBOX});` })}
      ${props => ifThemeInPropsIsPresentUse({ props, defaultValue: 'background-color: transparent;' })}
    }
  }
  &:disabled {
    ${props => ifThemeInPropsIsPresentUse({ props, defaultValue: `background-color: ${colors.aluminum};` })}
    ${props => ifThemeInPropsIsPresentUse({ props, value: `border-color: ${props.theme.white40};` })}
  }
  &:hover, &:focus {
    border-color: ${renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green })};
  }
  &:focus {
    outline: none;
  }
`;

const Text = styled.label`
  color: ${props => renderThemeKeyOrDefaultValue({ props, key: 'labelColor', defaultValue: props.theme.black60 })};
  vertical-align: middle;
  ${typography.subhead1}
`;

const Checkbox = ({ label, defaultChecked, checked, disabled, name, onChange, className, theme, greenDisabled }) => (
  <ThemeProvider theme={theme}>
    <div className={className}>
      <CheckboxEl
        onChange={e => e.stopPropagation()}
        id={name}
        name={name}
        type="checkbox"
        greenDisabled={greenDisabled}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        className="pb-test__checkbox"
        onClick={ onChange } />
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

function checkboxSvgGenerator(fill) { return `<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" xml:space="preserve"><path fill="${fill}" d="M21.3,0H2.7C1.2,0,0,1.2,0,2.7v18.7C0,22.8,1.2,24,2.7,24h18.7c1.5,0,2.7 -1.2,2.7 -2.7V2.7C24,1.2,22.8,0,21.3,0z M9.3,18.7L2.7,12l1.9 -1.9l4.8,4.8L19.5,4.8l1.9,1.9L9.3,18.7z"></path></svg>`; }
function generateSvgDataImageWithFill(fill) {
  return `data:image/svg+xml;base64,${btoa(checkboxSvgGenerator(fill))}`;
}
