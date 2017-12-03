import React from 'react';

const EditIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    <title>Edit Icon</title>
    <path d="M53.8,32.9l9.5,6.3L43,67.7L37.1,71l-5.1-3.6l1.2-6L53.8,32.9z M60.4,23.7l9.5,6.3l-4.5,6.5l-9.7-6.3L60.4,23.7z M30.4,60
    l-2,9.9l-2,10c-0.1,0.2,0.2,0.4,0.4,0.3l9.3-5.1l9.2-5.1l28.4-40.1c0.3-0.4,0.2-0.9-0.2-1.1l-13.3-8.9c-0.4-0.2-0.8-0.2-1.1,0.2
    L30.4,60z"/>
  </svg>
);

export default EditIcon;
