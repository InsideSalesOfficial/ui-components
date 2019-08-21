import React from 'react';

const NoAnswerMobileIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24" fill="currentColor">
    {props.title && <title>{props.title}</title>}
    <path d="M15.5,1 L7.5,1 C6.12,1 5,2.12 5,3.5 L5,20.5 C5,21.88 6.12,23 7.5,23 L15.5,23 C16.88,23 18,21.88 18,20.5 L18,3.5 C18,2.12 16.88,1 15.5,1 Z M11.5,22 C10.67,22 10,21.33 10,20.5 C10,19.67 10.67,19 11.5,19 C12.33,19 13,19.67 13,20.5 C13,21.33 12.33,22 11.5,22 Z M16,18 L7,18 L7,4 L16,4 L16,18 Z M15,13.013 L12.487,10.5 L15,7.987 L14.013,7 L11.5,9.513 L8.987,7 L8,7.987 L10.513,10.5 L8,13.013 L8.987,14 L11.5,11.487 L14.013,14 L15,13.013 Z" id="path-1"></path>
  </svg>
);

export default NoAnswerMobileIcon;