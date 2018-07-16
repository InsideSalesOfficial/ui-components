import React from 'react';

const EmailIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    <path d="M75.5,29h-51C22,29,20,31,20,33.5v33c0,2.5,2,4.5,4.5,4.5h51c2.5,0,4.5-2,4.5-4.5v-33C80,31,78,29,75.5,29z M74.4,32
      L50.8,51.8c-0.6,0.5-1.6,0.5-2.1,0L25.2,32H74.4z M75.5,68h-51c-0.8,0-1.5-0.7-1.5-1.5V34.1l23.8,20c0.8,0.7,1.9,1.1,3,1.1
      s2.1-0.4,3-1.1L77,33.7v32.8C77,67.3,76.3,68,75.5,68z"/>
  </svg>
);

export default EmailIcon;
