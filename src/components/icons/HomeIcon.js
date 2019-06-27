import React from 'react';

const HomeIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
  </svg>
);

export default HomeIcon;

