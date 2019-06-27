import React from 'react';

export default function Notes(props) {
  return (
    <svg
      {...props.size || { width: '24px', height: '24px' }}
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.title && <title>{props.title}</title>}
      <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
}
