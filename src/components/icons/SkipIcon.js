import React from 'react';

const SkipIcon = (props) => {
  const outline = props.outline ?
  {
    fill: 'none',
    strokeLinejoin: 'round',
    strokeWidth: '0.8',
    stroke: 'currentColor'
  } : {};

  return (
      <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
        <title>Skip</title>
        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" {...outline}/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
  );
};

export default SkipIcon;
