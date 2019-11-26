// Basic Button component
import React from 'react';
import styled, { keyframes } from 'styled-components';

import {
  colors,
  renderThemeKeyOrDefaultValue,
} from '../styles';


const bounce = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }
`;

const LoaderWrapper = styled.div`
  margin: 0 auto;
  width: ${(props) => {
    if (props.medium) {
      return 55;
    }
    if (props.small) {
      return 40;
    }

    return 80;
  }}px;
  text-align: center;
`;

const LoaderBubble = styled.div`
  width: ${(props) => {
    if (props.medium) {
      return 18;
    }
    if (props.small) {
      return 10;
    }

    return 20;
  }}px;
  height: ${(props) => {
    if (props.medium) {
      return 18;
    }
    if (props.small) {
      return 10;
    }

    return 20;
  }}px;
  background-color: ${(props) => {
    if (props.white) {
      return renderThemeKeyOrDefaultValue({ props, key: 'primary01', defaultValue: colors.white });
    }

    return renderThemeKeyOrDefaultValue({ props, key: 'brand01', defaultValue: colors.green });
  }};
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce};
  animation-duration:  1.4s;
  animation-timing-function:  ease-in-out;
  animation-delay: ${(props) => {
    if (props.delay) {
      return props.delay;
    }
    return 0;
  }}s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`;

export const Loader = ({ className, ...props }) => (
  <LoaderWrapper className={className} {...props}>
    <LoaderBubble delay={-0.32} {...props} />
    <LoaderBubble delay={-0.16} {...props}/>
    <LoaderBubble {...props} />
  </LoaderWrapper>
);

export default Loader;
