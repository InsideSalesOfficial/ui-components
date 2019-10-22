import React from 'react';
import styled, { keyframes, withTheme } from 'styled-components';
import * as _ from 'lodash';

import Loader from '../Loader';
import {
  colors,
  typography,
  boxShadows,
  renderThemeIfPresentOrDefault,
  renderThemeKeyOrDefaultValue,
  ifThemeInPropsIsPresentUse,
} from '../styles';

export const buttonAnimationTimeSeconds = 2;

const fade = keyframes`
  0%   {
    background: ${renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green})};
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24);
  }
  100% {
    opacity: 0;
    box-shadow: none;
  }
`;

const ButtonBase = styled.button`
  animation: ${(props) => {
    if (props.fade) {
      return fade;
    }

    return 'none';
  }} ${buttonAnimationTimeSeconds}s;

  --background: ${(props) => {
    if (props.danger && props.disabled) {
      return renderThemeKeyOrDefaultValue({ props, key: 'warning03', defaultValue: colors.red10 });
    }

    if (props.disabled || props.fade) {
      return renderThemeKeyOrDefaultValue({ props, key: 'brand03', defaultValue: colors.green10 });
    }

    if (props.danger) {
      return renderThemeKeyOrDefaultValue({ props, key: 'warning01', defaultValue: colors.red });
    }

    if (props.outline || props.flat || props.flatAlt) {
      return 'transparent';
    }

    if (props.neuralytics) {
      return renderThemeKeyOrDefaultValue({ props, key: 'tron01', defaultValue: colors.tron});
    }

    return renderThemeKeyOrDefaultValue({ props, key: 'brand01', defaultValue: colors.green});
  }};
  background: var(--background);

  transition: box-shadow .25s ease-in-out, background-color .25s ease-in-out;
  &:hover {
    background-color: ${(props) => {
      if (props.flat || props.flatAlt || props.outline) {
        return renderThemeKeyOrDefaultValue({ props, key: 'brand04', defaultValue: colors.green10});
      }

      return 'var(--background)';
    }};

    box-shadow: ${(props) => {
      if (props.loading || props.fade || props.disabled || props.flat || props.flatAlt || props.outline) {
        return;
      }

      return `inset 0 0 0 9999px ${colors.black10}, ` + boxShadows.lvl3;
    }};
  }

  &:active {
    transition: box-shadow .01s linear, background-color .01s linear;
    background-color: ${(props) => {
      if (props.flat || props.flatAlt || props.outline) {
        return renderThemeKeyOrDefaultValue({ props, key: 'brand04', defaultValue: colors.green10});
      }

      return 'var(--background)';
    }};

    box-shadow: ${(props) => {
      if (props.loading || props.fade || props.disabled) {
        return;
      }
      if ((props.flat && !props.onDarkBg) || (props.flatAlt && !props.onDarkBg) || (props.outline && !props.onDarkBg)) {
        return `inset 0 0 0 9999px ${colors.black4}`;
      }
      if ((props.flat && props.onDarkBg) || (props.flatAlt && props.onDarkBg) || (props.outline && props.onDarkBg)) {
        return `inset 0 0 0 9999px ${colors.white4}`;
      }

      return `inset 0 0 0 9999px transparent, ` + boxShadows.lvl6;
    }};

    color: ${(props) => {
      if (props.flat || props.outline) {
        return renderThemeKeyOrDefaultValue({ props, key: 'brand01', defaultValue: colors.green});
      }
    }};
  }
  
  &:disabled {
    box-shadow: ${(props) => {
      if (props.flat || props.flatAlt || props.outline) {
        return 'transparent';
      }
      if (props.onDarkBg) {
        return `inset 0 0 0 9999px ${colors.white10}`;
      }
      return `inset 0 0 0 9999px ${colors.black10}`;
    }};
    background: ${(props) => {
      if (props.flat || props.flatAlt || props.outline) {
        return 'transparent';
      }
      return 'var(--background)';
    }};
    color: ${(props) => {
      if ((props.flat && !props.onDarkBg) || (props.outline && !props.onDarkBg)) {
        return renderThemeKeyOrDefaultValue({ props, key: 'white40', defaultValue: colors.black40});
      }
      if (props.flatAlt) {
        return renderThemeKeyOrDefaultValue({ props, key: 'brand03', defaultValue: colors.green40});
      }
      if (props.danger && ifThemeInPropsIsPresentUse({ props, value: true })) return renderThemeKeyOrDefaultValue({ props, key: 'white40'});
      return renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white40});
    }};
    border-color: ${(props) => {
      if (props.outline) {
        return renderThemeKeyOrDefaultValue({ props, key: 'brand03', defaultValue: colors.green40});
      }
      return;
    }};
  }

  cursor: ${(props) => {
    if (props.disabled || props.fade || props.loading) {
      return 'default';
    }
    return 'pointer';
  }};

  border: ${(props) => {
    if (props.outline) {
      if (props.disabled) {
        return `1px solid ${renderThemeKeyOrDefaultValue({ props, key: 'brand03', defaultValue: colors.green40})}`;
      }
      return `1px solid ${renderThemeKeyOrDefaultValue({ props, key: 'brand01', defaultValue: colors.green})}`;
    }
    return 'none';
  }};

  border-radius: 2px;
  color: ${(props) => {
    if ((props.outline && !props.onDarkBg) || (props.flat && !props.onDarkBg)) {
      return renderThemeKeyOrDefaultValue({ props, key: 'white90', defaultValue: colors.black90});
    }
    if (props.flatAlt) {
      return renderThemeKeyOrDefaultValue({ props, key: 'brand01', defaultValue: colors.green});
    }

    if (props.danger && ifThemeInPropsIsPresentUse({ props, value: true })) return renderThemeKeyOrDefaultValue({ props, key: 'white90'});
    return renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white90});
  }};

  height: 36px;
  line-height: 24px;
  outline: 0;

  width: auto;
  min-width: 88px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
`;

const CenteredSpan = styled.span`
  width: 100%;
  height: 100%;

  display: flex;
  flex: 0 0 auto;
  flex-shrink: none;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  font-family: 'isdc-roboto', 'Roboto', sans-serif;
  ${typography.body2}

  padding: 0;
  margin: 0;
`;

const buttonSelector = 'pb-test__button';

export const Button = withTheme(({ className, label, loading, onClick, ...props }) => {
  const debouncedOnClick = _.debounce(onClick, 175);

  return <ButtonBase
    className={className ? [buttonSelector, className].join(' ') : buttonSelector}
    onClick={() => { if (!loading && !props.fade && onClick) { debouncedOnClick(); } }}
    loading={loading}
    {...props}
  >
    <span>
      {loading ? (
        <Loader white small />
      ) : (
        <CenteredSpan>
          {label}
        </CenteredSpan>
      )}
    </span>
  </ButtonBase>;
});

Button.defaultProps = {
  onClick: _.identity
};

export default Button;
