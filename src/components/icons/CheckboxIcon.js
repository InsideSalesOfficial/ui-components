import React from 'react';

const icons = {
  'checkbox-empty':
  (
    <g>
      <path d="M68,29c1.7,0,3,1.3,3,3v36c0,1.7-1.3,3-3,3H32c-1.7,0-3-1.3-3-3V32c0-1.7,1.3-3,3-3H68 M68,26H32c-3.3,0-6,2.7-6,6v36
      c0,3.3,2.7,6,6,6h36c3.3,0,6-2.7,6-6V32C74,28.7,71.3,26,68,26L68,26z"/>
    </g>
  ),
  'checkbox-checked':
  (
    <g>
      <path d="M36,51.7L48.7,63L66,39.4L60.8,36L47.7,53.9l-7.4-6.6L36,51.7L36,51.7z"/>
      <path d="M68,29c1.7,0,3,1.3,3,3v36c0,1.7-1.3,3-3,3H32c-1.7,0-3-1.3-3-3V32c0-1.7,1.3-3,3-3H68 M68,26H32c-3.3,0-6,2.7-6,6v36
      c0,3.3,2.7,6,6,6h36c3.3,0,6-2.7,6-6V32C74,28.7,71.3,26,68,26L68,26z"/>
    </g>
  ),
};

const CheckboxIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    {props.type ? icons[props.type] : icons['checkbox-checked']}
  </svg>
);


export default CheckboxIcon;
