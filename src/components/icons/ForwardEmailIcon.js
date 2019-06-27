import React from 'react';

const ForwardEmailIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <path d="M12 8V4l8 8-8 8v-4H4V8z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default ForwardEmailIcon;
