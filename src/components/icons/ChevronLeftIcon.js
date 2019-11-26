import React from 'react';

import { colors, generateFillFromProps } from '../styles/colors';

const ChevronLeftIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <path {...generateFillFromProps(props, colors.grayD)} d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default ChevronLeftIcon;
