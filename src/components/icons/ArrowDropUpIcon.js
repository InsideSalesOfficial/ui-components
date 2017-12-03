import React from 'react';

const ArrowDropUpIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    <path d="M7 14l5-5 5 5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

export default ArrowDropUpIcon;
