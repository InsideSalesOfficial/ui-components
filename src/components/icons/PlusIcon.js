import React from 'react';

const PlusIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    {props.title && <title>{props.title}</title>}
    <polygon points="55 25 45 25 45 45 25 45 25 55 45 55 45 75 55 75 55 55 75 55 75 45 55 45 55 25" />
  </svg>
);

export default PlusIcon;
