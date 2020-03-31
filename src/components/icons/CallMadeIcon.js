import React from 'react';

const CallMadeIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
  </svg>
);

export default CallMadeIcon;
