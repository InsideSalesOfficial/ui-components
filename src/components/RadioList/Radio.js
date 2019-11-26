import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import {
  colors,
  typography,
  renderThemeIfPresentOrDefault,
  ifThemeInPropsIsPresentUse
} from '../styles';

const size = 16;

function renderThemedLabelActiveBackground(props) {
  if (props.theme.lightRadio || !props.theme.brand01) return '';
  return transparentize(0.9, props.theme.brand01)
}

function renderThemedLabelBackground(props) {
  if (props.theme.lightRadio) return 'transparent';
  return props.theme.white10;
}

const RadioLabel = styled.label`
  ${typography.bodyCompact}
  background: ${props => ifThemeInPropsIsPresentUse({ props, value: renderThemedLabelBackground(props), defaultValue: props.theme.background })};
  display: flex;
  align-items: center;
  width: 100%;
  color: ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black60 })};
  cursor: pointer;
  padding: ${props => {
    if (!_.isEmpty(props.label.super) && !_.isEmpty(props.label.main) && !_.isEmpty(props.theme.padding)) {
      return `6px ${props.theme.padding} 4px ${props.theme.padding}`;
    } else if (!_.isEmpty(props.theme.padding)) {
      return props.theme.padding;
    } 
    return '0.75em';
  }};
  margin: ${props => props.theme.margin} 0;
  
  ${props => props.active && css`
    background: ${props => ifThemeInPropsIsPresentUse({ props, value: renderThemedLabelActiveBackground(props), defaultValue: props.theme.backgroundFocused })};
    color: ${renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.black90 })};
  `}
`;

const RadioInput = styled.input`
  display: none;
`;

function renderThemedRadioCircleBorder(props) {
  return props.theme.white60;
}

function renderRadioCircleBorder(props) {
  return props.theme.lightRadio ? colors.black40 : colors.black
}

function renderThemedOuterRadioCircle(props) {
  if (!props.active) return '';
  return `border-color: ${props.theme.brand01};`
}

function renderOuterRadioCircle(props) {
  if (!props.theme.lightRadio || !props.active) return '';
  return `border-color: ${colors.green};`
}

const RadioCircle = styled.span`
  min-width: ${size}px;
  min-height: ${size}px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid ${props => ifThemeInPropsIsPresentUse({ props, value: renderThemedRadioCircleBorder(props), defaultValue: renderRadioCircleBorder(props) })};
  position: relative;
  vertical-align: middle;
  margin-right: 0.5714em;
  background: ${renderThemeIfPresentOrDefault({ key: 'transparent', defaultValue: colors.white })};
  box-sizing: content-box;

  ${props => ifThemeInPropsIsPresentUse({ props, value: renderThemedOuterRadioCircle(props), defaultValue: renderOuterRadioCircle(props) })}
  ${props => props.active && css`
    &:before {
      content: '';
      border-radius: 50%;
      width: ${size * 0.625}px;
      height: ${size * 0.625}px;
      background-color: ${renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green })};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `} 
`;

const MultiLineLabelWrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const SuperscriptLabel = styled.div`
    color: ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black60 })};
    ${typography.caption}
`;

const MainLabel = styled.div`
    color: ${renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black90 })};
    ${typography.subhead1}
`;

const RadioComponent = ({ id, name, label = "", value, setValue, selectedValue = "" }) => {
  const active = value === selectedValue;

  const findLabel = (label) => {
    if (!_.isEmpty(label.super) && !_.isEmpty(label.main)) {
      return (
        <MultiLineLabelWrapper>
          <SuperscriptLabel>{label.super}</SuperscriptLabel>
          <MainLabel>{label.main}</MainLabel>
        </MultiLineLabelWrapper>
      );
    }
    return label;
  }

  return (<div>
    <RadioInput
      className="pb-test__radio"
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={active}
      onChange={() => { setValue(value) }}
    />
    <RadioLabel htmlFor={id} active={active} label={label}>
      <RadioCircle active={active}></RadioCircle>{findLabel(label)}
    </RadioLabel>
  </div>);
};

RadioComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.any,
  selectedValue: PropTypes.any,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired
};


export default RadioComponent;
