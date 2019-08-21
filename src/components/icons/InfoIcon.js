import React from 'react';

const InfoIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    {props.title && <title>{props.title}</title>}
    <path d="M50,26.7a23,23,0,1,0,23,23A23,23,0,0,0,50,26.7Zm0,43a20,20,0,1,1,20-20A20,20,0,0,1,50,69.7Z" />
    <path d="M50,44.7a3,3,0,1,0-3-3A3,3,0,0,0,50,44.7Z" />
    <rect x="48" y="46.7" width="4" height="14" />
  </svg>
);

export default InfoIcon;
