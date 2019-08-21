import React from 'react';

const BouncedIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <defs>
      <path d="M24 24H0V0h24v24z" id="a" />
    </defs>
    <clipPath id="b">
      <use overflow="visible" xlinkHref="#a" />
    </clipPath>
    <path clipPath="url(#b)" d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" />
  </svg>
);

export default BouncedIcon;
