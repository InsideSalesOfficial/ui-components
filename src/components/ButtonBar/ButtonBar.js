import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import InteractiveElement from '../InteractiveElement';
import { colors } from '../styles';
import {fontWeights} from "../styles/typography";

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
  color: ${colors.black90};
  font-weight: ${fontWeights.halfBold}
  cursor: pointer;
  text-align: left;
`;

const SecondaryActionButton = styled(Button)`
  width: auto;
  border: none;
  padding: 0;
  color: ${colors.black90};
  font-weight: ${fontWeights.halfBold}
`;

const PrimaryActionElement = styled(InteractiveElement)`
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${colors.green};
  font-weight: ${fontWeights.halfBold}
  cursor: pointer;
  text-align: left;
`;

const PrimaryButtonElement = styled(Button)`
  width: initial;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 88px;
  font-weight: ${fontWeights.halfBold}
`;

const ButtonBar = ({
  primaryActionStyle,
  primaryActionText,
  onPrimaryActionClick,
  actionLoading,
  isActionDisabled,
  onSecondaryActionClick,
  secondaryActionStyle,
  secondaryActionText,
  tertiaryElement
}) => {
  function getPrimaryElement() {
    if (primaryActionStyle === 'button') {
      return (
        <PrimaryButtonElement
          className={'pb-test__decline'}
          onClick={(event) => {
            if (event) { event.stopPropagation(); }
            onPrimaryActionClick();
          }}
          loading={actionLoading}
          disabled={isActionDisabled}
          label={primaryActionText}
        />
      );
    }
    return (
      <PrimaryActionElement
        className={'pb-test__decline'}
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
          className={'pb-test__decline'}
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
        className={'pb-test__decline'}
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
    <ButtonContainer primaryActionStyle={primaryActionStyle}>
      {tertiaryElement}
      {getSecondaryElement()}
      {getPrimaryElement()}
    </ButtonContainer>
  );
};

ButtonBar.defaultProps = {
  primaryActionStyle: 'button',
  secondaryActionStyle: 'button'
};

export default ButtonBar;
