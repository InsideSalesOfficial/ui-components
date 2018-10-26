import React from 'react';

export default function CallForward(props) {
  return (
    <svg
      {...props.size || { width: '24px', height: '24px' }}
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z" />
    </svg>
  );
}
