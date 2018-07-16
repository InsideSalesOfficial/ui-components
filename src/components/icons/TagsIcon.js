import React from 'react';
import PropTypes from 'prop-types';

const TagsIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} {...props.color || { fill: '#FFFFFF' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>{props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" />
  </svg>
);

TagsIcon.propTypes = {
  size: PropTypes.object,
  color: PropTypes.string
};

export default TagsIcon;
