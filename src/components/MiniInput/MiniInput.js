import styled from 'styled-components';
import React from 'react';
import _ from 'lodash';

import * as Themes from './MiniInputThemes';
import {
  colors,
  typography,
  renderThemeIfPresentOrDefault,
  renderThemeKeyOrDefaultValue,
} from "../styles";

const StyledMiniInput = styled.input`
    color: ${props => renderThemeKeyOrDefaultValue({ props, key: 'noValue', defaultValue: props.secondaryTheme.color})};
    border-radius: 2px;
    width: 40px;
    padding-left: 8px;
    padding-right: 8px;
    outline: 0;
    text-align: center;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid ${props => renderThemeKeyOrDefaultValue({ props, key: 'noValue', defaultValue: props.secondaryTheme.borderColor})};
    ${props => props.disabled && `opacity: 0.4;`}

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &:focus {
        color: ${renderThemeIfPresentOrDefault({ key: 'white', defaultValue: colors.green })};
        border-color: ${renderThemeIfPresentOrDefault({ key: 'white', defaultValue: colors.green })};
    }
    ${typography.body2}
`;

// theme is passed as secondaryTheme to not override theme providers theme.
const MiniInput = ({value, onChange, onEnterUp, type, disabled, onFocus, onBlur, ...props }) =>
    <StyledMiniInput
        secondaryTheme={props.theme || {}}
        value={value}
        type={type}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={(e) => {
            e.stopPropagation();
            if (e.key === 'Enter') {
                onEnterUp();
            }
        }}
        onChange={(e) => {
            e.stopPropagation();
            onChange(_.get(e, 'target.value'));
        }}
      className="pb-test__mini-input"/>


MiniInput.defaultProps = {
    theme: Themes.darkTheme,
    value: '',
    onChange: _.noop,
    onEnter: _.noop,
}

export default MiniInput
