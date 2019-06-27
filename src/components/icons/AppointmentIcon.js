import React from 'react';

const AppointmentIcon = props => (
  <svg {...props.size || { width: '18px', height: '20px' }} {...props} viewBox="0 0 18 20">
    {props.title && <title>{props.title}</title>}
    <g transform="translate(-3.000000, -2.000000)">
      <path d="M11,18.5 L13,18.5 L13,15.5 L16,15.5 L16,13.5 L13,13.5 L13,10.5 L11,10.5 L11,13.5 L8,13.5 L8,15.5 L11,15.5 L11,18.5 Z M19,4 L18,4 L18,2 L16,2 L16,4 L8,4 L8,2 L6,2 L6,4 L5,4 C3.89,4 3.01,4.9 3.01,6 L3,20 C3,21.1 3.89,22 5,22 L19,22 C20.1,22 21,21.1 21,20 L21,6 C21,4.9 20.1,4 19,4 Z M19,20 L5,20 L5,9 L19,9 L19,20 Z" id="Shape"></path>
    </g>
  </svg>
);

export default AppointmentIcon;
