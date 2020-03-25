import React from 'react';

const PauseCircleIconBold = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 512 512" fill="currentColor">
    {props.title && <title>{props.title}</title>}
    <path d="M 256 8 C 119 8 8 119 8 256 s 111 248 248 248 s 248 -111 248 -248 S 393 8 256 8 Z m -16 328 c 0 8.8 -7.2 16 -16 16 h -48 c -8.8 0 -16 -7.2 -16 -16 V 176 c 0 -8.8 7.2 -16 16 -16 h 48 c 8.8 0 16 7.2 16 16 v 160 Z m 112 0 c 0 8.8 -7.2 16 -16 16 h -48 c -8.8 0 -16 -7.2 -16 -16 V 176 c 0 -8.8 7.2 -16 16 -16 h 48 c 8.8 0 16 7.2 16 16 v 160 Z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default PauseCircleIconBold;
