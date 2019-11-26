import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Button from '../Button';
import InteractiveElement from '../InteractiveElement';
import {
  colors,
  renderThemeIfPresentOrDefault,
  ifThemeInPropsIsPresentUse,
} from '../styles';

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  flex-shrink: 0;
  flex-grow: 0;

  button {
    margin-left: 10px;
  }
`;

const SecondaryActionElement = styled(InteractiveElement)`
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black90})};
  cursor: pointer;
  text-align: left;
`;

const SecondaryActionButton = styled(Button)`
  width: auto;
  border: none;
  padding: 0;
  color: ${props => ifThemeInPropsIsPresentUse({ props, value: props.theme.white60, defaultValue: props.theme.labelColor || colors.black90})};
`;

const PrimaryActionElement = styled(InteractiveElement)`
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green})};
  cursor: pointer;
  text-align: left;
`;

const PrimaryButtonElement = styled(Button)`
  width: initial;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 88px;
`;

const SECONDARY_TEST_CLASSNAME = 'pb-test__secondary';
const PRIMARY_TEST_CLASSNAME = 'pb-test__primary';

const ButtonBar = ({
  primaryActionStyle,
  primaryActionText,
  primaryActionDanger,
  onPrimaryActionClick,
  actionLoading,
  isActionDisabled,
  onSecondaryActionClick,
  secondaryActionStyle,
  secondaryActionText,
  tertiaryElement,
  theme
}) => {
  function getPrimaryElement() {
    if (primaryActionStyle === 'button') {
      return (
        <PrimaryButtonElement
          className={PRIMARY_TEST_CLASSNAME}
          onClick={(event) => {
            if (event) { event.stopPropagation(); }
            onPrimaryActionClick();
          }}
          loading={actionLoading}
          disabled={isActionDisabled}
          label={primaryActionText}
          danger={primaryActionDanger}
        />
      );
    }
    return (
      <PrimaryActionElement
        className={PRIMARY_TEST_CLASSNAME}
        onClick={(event) => {
          if (event) { event.stopPropagation(); }
          onPrimaryActionClick();
        }}
      >
        {primaryActionText}
      </PrimaryActionElement>
    );
  }

  function getSecondaryElement() {
    if (!secondaryActionText) {
      return null;
    }
    if (secondaryActionStyle === 'button') {
      return (
        <SecondaryActionButton
          className={SECONDARY_TEST_CLASSNAME}
          id="secondary-button"
          flat
          onClick={(event) => {
            if (event) { event.stopPropagation(); }
            onSecondaryActionClick();
          }}
          label={secondaryActionText}
        />
      );
    }
    return (
      <SecondaryActionElement
        className={SECONDARY_TEST_CLASSNAME}
        onClick={(event) => {
          if (event) { event.stopPropagation(); }
          onSecondaryActionClick();
        }}
      >
        {secondaryActionText}
      </SecondaryActionElement>
    );
  }
  return (
    <ThemeProvider  theme={theme}>
      <ButtonContainer primaryActionStyle={primaryActionStyle}>
        {tertiaryElement}
        {getSecondaryElement()}
        {getPrimaryElement()}
      </ButtonContainer>
    </ThemeProvider>
  );
};

ButtonBar.defaultProps = {
  primaryActionStyle: 'button',
  primaryActionDanger: false,
  secondaryActionStyle: 'button',
  theme: {},
};

export default ButtonBar;
