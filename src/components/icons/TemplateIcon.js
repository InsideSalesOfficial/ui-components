import React from 'react';

const TemplateIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    <path d="M16,1 L4,1 C2.9,1 2,1.9 2,3 L2,17 L4,17 L4,3 L16,3 L16,1 Z M19,5 L8,5 C6.9,5 6,5.9 6,7 L6,21 C6,22.1 6.9,23 8,23 L19,23 C20.1,23 21,22.1 21,21 L21,7 C21,5.9 20.1,5 19,5 Z M19,21 L8,21 L8,7 L19,7 L19,21 Z M10,15 L17,15 L17,13 L10,13 L10,15 Z M10,19 L13,19 L13,17 L10,17 L10,19 Z M10,9 L10,11 L17,11 L17,9 L10,9 Z"></path>
  </svg>
);

export default TemplateIcon;
