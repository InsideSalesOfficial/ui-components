import React from 'react';

const FilterIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props}>
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>
  </svg>
);

export default FilterIcon;
