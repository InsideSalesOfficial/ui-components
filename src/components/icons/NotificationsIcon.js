import React from 'react';

const icons = {
  'notifications-oval':
  (
    <g>
      <path style={{ fill: '#fff', opacity: 0.4 }}d="M50 22.92A27.08 27.08 0 1 1 22.92 50 27.11 27.11 0 0 1 50 22.92m0-4.17A31.25 31.25 0 1 0 81.25 50 31.25 31.25 0 0 0 50 18.75z"/>
      <path style={{ fill: '#fff', opacity: 0.2 }}d="M50 22.92A27.08 27.08 0 1 1 22.92 50 27.11 27.11 0 0 1 50 22.92"/>
    </g>
  ),
  'notifications-oval-hover':
  (
    <circle style={{ fill: '#fff' }} cx="50" cy="50" r="31.25"/>
  ),
  'notifications-oval-new-message':
  (
    <g>
      <circle style={{ fill: '#f18b14', opacity: 0.2 }} className="cls-1" cx="50" cy="50.56" r="31.25"/>
      <path className="cls-2" style={{ fill: '#f18b14' }} d="M50 23.48a27.08 27.08 0 1 1-27.08 27.08A27.11 27.11 0 0 1 50 23.48m0-4.17a31.25 31.25 0 1 0 31.25 31.25A31.25 31.25 0 0 0 50 19.31z"/>
      <path className="cls-2" style={{ fill: '#f18b14' }} d="M50 13.06a37.5 37.5 0 1 1-37.5 37.5A37.54 37.54 0 0 1 50 13.06M50 11a39.58 39.58 0 1 0 39.58 39.56A39.58 39.58 0 0 0 50 11z"/>
      <path className="cls-3 cls-2" style={{ fill: '#f18b14', opacity: 0.46 }} d="M50 3.19A47.37 47.37 0 1 1 2.63 50.56 47.42 47.42 0 0 1 50 3.19m0-2.63a50 50 0 1 0 50 50 50 50 0 0 0-50-50z"/>
    </g>
  ),
  'notifications-oval-new-message-hover':
  (
    <g>
      <circle style={{ fill: '#f18b14', opacity: 1 }} className="cls-1" cx="50" cy="50.56" r="31.25"/>
      <path className="cls-2" style={{ fill: '#f18b14' }} d="M50 23.48a27.08 27.08 0 1 1-27.08 27.08A27.11 27.11 0 0 1 50 23.48m0-4.17a31.25 31.25 0 1 0 31.25 31.25A31.25 31.25 0 0 0 50 19.31z"/>
      <path className="cls-2" style={{ fill: '#f18b14' }} d="M50 13.06a37.5 37.5 0 1 1-37.5 37.5A37.54 37.54 0 0 1 50 13.06M50 11a39.58 39.58 0 1 0 39.58 39.56A39.58 39.58 0 0 0 50 11z"/>
      <path className="cls-3 cls-2" style={{ fill: '#f18b14', opacity: 0.46 }} d="M50 3.19A47.37 47.37 0 1 1 2.63 50.56 47.42 47.42 0 0 1 50 3.19m0-2.63a50 50 0 1 0 50 50 50 50 0 0 0-50-50z"/>
    </g>
  )
};

const NotificationsIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 100 100">
    <title>Notifications Icon</title>
    {props.type ? icons[props.type] : icons['notifications-oval-new-message']}
  </svg>
);

export default NotificationsIcon;

