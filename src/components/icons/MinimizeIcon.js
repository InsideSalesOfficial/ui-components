import React from 'react';

const MinimizeIcon = props => (
  <svg {...props.size || { width: '18px', height: '16px' }} {...props} viewBox="0 0 18 16">
    {props.title && <title>{props.title}</title>}
    <path transform="translate(-3.000000, -4.000000)" d="M19,4 L5,4 C3.89,4 3,4.9 3,6 L3,18 C3,19.1 3.89,20 5,20 L19,20 C20.1,20 21,19.1 21,18 L21,6 C21,4.9 20.11,4 19,4 Z M19,18 L5,18 L5,6 L15.0488036,6 L15,10 L19,10.0096885 L19,18 Z"></path>
  </svg>
);

export default MinimizeIcon;
