import React from 'react';

function EmailBouncedIcon(props) {
  return (
    <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
      <defs>
          <path d="M19,20 L19,22 L17,22 L17,20 L19,20 Z M20,4 C21.1,4 22,4.9 22,6 L22,6 L22,12.68 C21.09,12.25 20.08,12 19,12 C15.13,12 12,15.13 12,19 C12,19.34 12.03,19.67 12.08,20 L12.08,20 L4,20 C2.9,20 2,19.1 2,18 L2,18 L2,6 C2,4.9 2.9,4 4,4 L4,4 Z M19,14 L19,19 L17,19 L17,14 L19,14 Z M20,6 L12,11 L4,6 L4,8 L12,13 L20,8 L20,6 Z" id="path-1"></path>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1"></use>
          </mask>
        <use id="Shape" fill={props.useParentColor ? 'currentColor' : '#FFFFFF'} fillRule="nonzero" xlinkHref="#path-1"></use>
      </g>
    </svg>
  );
}

export default EmailBouncedIcon;
