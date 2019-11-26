import React from 'react';

const NoAnswerIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24" fill="currentColor">
    {props.title && <title>{props.title}</title>}
    <path d="M20,16.5 C20.5,16.5 21,17 21,17.5 L21,21 C21,21.5 20.5,22 20,22 C10.6,22 3,14.4 3,5 C3,4.4 3.5,4 4,4 L7.5,4 C8.1,4 8.5,4.4 8.5,5 C8.5,6.2 8.7,7.4 9,8.5 C9.2,8.8 9.1,9.2 8.8,9.5 L6.6,11.7 C8,14.5 10.4,16.9 13.2,18.3 L15.4,16.1 C15.7,15.9 16,15.8 16.4,15.9 C17.5,16.3 18.8,16.5 20,16.5 Z M21,9.872 L19.872,11 L17,8.128 L14.128,11 L13,9.872 L15.872,7 L13,4.128 L14.128,3 L17,5.872 L19.872,3 L21,4.128 L18.128,7 L21,9.872 Z"></path>
  </svg>
);

export default NoAnswerIcon;