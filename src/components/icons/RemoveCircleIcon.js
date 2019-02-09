import React from 'react';

const RemoveCircleIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24" fill="currentColor">
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
  </svg>
);

export default RemoveCircleIcon;