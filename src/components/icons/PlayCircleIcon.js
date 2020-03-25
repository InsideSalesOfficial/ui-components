import React from 'react';

const PlayCircleIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 512 512" fill="currentColor">
    {props.title && <title>{props.title}</title>}
    <path d="M 256 48 C 141.1 48 48 141.1 48 256 s 93.1 208 208 208 s 208 -93.1 208 -208 S 370.9 48 256 48 Z m 83.8 211.9 l -137.2 83 c -2.9 1.8 -6.7 -0.4 -6.7 -3.9 V 173 c 0 -3.5 3.7 -5.7 6.7 -3.9 l 137.2 83 c 2.9 1.7 2.9 6.1 0 7.8 Z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default PlayCircleIcon;
