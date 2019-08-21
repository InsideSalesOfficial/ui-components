import React from 'react';

const UpdateFilledIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <g id="Notifications" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Update-Peek" transform="translate(-23.000000, -80.000000)">
        <g id="Icon/Action/Update-System-White" transform="translate(22.000000, 77.000000)">
          <g id="Shape">
            <polygon points="0 0.5 24 0.5 24 24.5 0 24.5"></polygon>
            <path d="M12,16.5 L16,12.5 L13,12.5 L13,3.5 L11,3.5 L11,12.5 L8,12.5 L12,16.5 Z M21,3.5 L15,3.5 L15,5.49 L21,5.49 L21,19.52 L3,19.52 L3,5.49 L9,5.49 L9,3.5 L3,3.5 C1.9,3.5 1,4.4 1,5.5 L1,19.5 C1,20.6 1.9,21.5 3,21.5 L21,21.5 C22.1,21.5 23,20.6 23,19.5 L23,5.5 C23,4.4 22.1,3.5 21,3.5 Z" fill="#FFFFFF" fillRule="nonzero"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default UpdateFilledIcon;
