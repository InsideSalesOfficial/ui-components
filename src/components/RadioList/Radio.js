import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const size = 16;

const RadioLabel = styled.label`
  ${typography.bodyCompact}
  background: ${props => props.theme.background};
  color: ${colors.black60};
  display: block;
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
    background: ${props => props.theme.backgroundFocused};
    color: ${colors.black90};
  `}
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioCircle = styled.span`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid ${props => props.theme.lightRadio ? colors.black40 : colors.black};
  position: relative;
  vertical-align: middle;
  margin-right: 0.5714em;
  background: ${colors.white};
  box-sizing: content-box;

  ${props => props.theme.lightRadio && props.active && `
    border-color: ${colors.green};
  `};

  
  ${props => props.active && css`
    &:before {
      content: '';
      border-radius: 50%;
      width: ${size * 0.625}px;
      height: ${size * 0.625}px;
      background-color: ${colors.green};
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
    color: ${colors.black60};
    ${typography.caption}
`;

const MainLabel = styled.div`
    color: ${colors.black90};
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