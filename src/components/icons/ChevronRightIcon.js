import React from 'react';

import { colors } from '../styles/colors';

const ChevronRightIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <path fill={props.fill || colors.grayD} d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default ChevronRightIcon;
