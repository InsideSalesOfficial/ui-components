import styled from 'styled-components';
import React from 'react';
import _ from 'lodash';

import { typography, colors } from '../styles';
import * as Themes from './MiniInputThemes';

const StyledMiniInput = styled.input`
    color: ${props => props.theme.color};
    border-radius: 2px;
    width: 40px;
    padding-left: 8px;
    padding-right: 8px;
    outline: 0;
    text-align: center;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.borderColor};
    ${props => props.disabled && `opacity: 0.4;`}

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &:focus {
        color: ${colors.green};
        border-color: ${colors.green};
    }
    ${typography.body2}
`;

const MiniInput = ({theme, value, onChange, onEnterUp, type, disabled, onFocus, onBlur}) =>
    <StyledMiniInput
        theme={theme}
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
        }} />


MiniInput.defaultProps = {
    theme: Themes.darkTheme,
    value: '',
    onChange: _.noop,
    onEnter: _.noop,
}

export default MiniInput