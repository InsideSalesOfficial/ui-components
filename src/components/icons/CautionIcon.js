import React from 'react';

const CautionIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
{props.title && <title>{props.title}</title>}
        <path d="M74,75.5H26a1.5,1.5,0,0,1-1.34-2.17l24-48a1.5,1.5,0,0,1,2.68,0l24,48A1.5,1.5,0,0,1,74,75.5Zm-45.57-3H71.57L50,29.35Z"/>
    <path d="M50.53,64.34a1.71,1.71,0,0,1,1.39.56,2.09,2.09,0,0,1,.47,1.39,2,2,0,0,1-.47,1.37,2.06,2.06,0,0,1-2.79,0,2,2,0,0,1-.46-1.37,2.12,
    2.12,0,0,1,.46-1.39A1.7,1.7,0,0,1,50.53,64.34Zm1.38-3.9H49L48.74,41.19h3.43Z"/>
  </svg>
);

export default CautionIcon;
