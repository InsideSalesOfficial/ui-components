import React from 'react';

const OtherIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    {props.title && <title>{props.title}</title>}
    <path d="M67.6,74.13h-1v-3h1a3.54,3.54,0,0,0,3.53-3.53v-1h3v1A6.54,6.54,0,0,1,67.6,74.13Z" />
    <path d="M61.88,74.13h-9.5v-3h9.5v3Zm-14.25,0h-9.5v-3h9.5v3Z" />
    <path d="M33.37,74.13h-1a6.54,6.54,0,0,1-6.53-6.53v-1h3v1a3.54,3.54,0,0,0,3.53,3.53h1v3Z" />
    <path d="M28.87,61.88h-3v-9.5h3v9.5Zm0-14.25h-3v-9.5h3v9.5Z" />
    <path d="M28.87,33.37h-3v-1a6.54,6.54,0,0,1,6.53-6.53h1v3h-1a3.54,3.54,0,0,0-3.53,3.53v1Z" />
    <path d="M61.88,28.87h-9.5v-3h9.5v3Zm-14.25,0h-9.5v-3h9.5v3Z" />
    <path d="M74.13,33.37h-3v-1a3.54,3.54,0,0,0-3.53-3.53h-1v-3h1a6.54,6.54,0,0,1,6.53,6.53v1Z" />
    <path d="M74.13,61.88h-3v-9.5h3v9.5Zm0-14.25h-3v-9.5h3v9.5Z" />
  </svg>
);

export default OtherIcon;
