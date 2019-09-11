import React from 'react';

const PlayIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <path d="M15,15 C17.21,15 19,16.79 19,19 C19,21.21 17.21,23 15,23 C12.79,23 11,21.21 11,19 C11,16.79 12.79,15 15,15 Z M15,21 C16.1,21 17,20.1 17,19 C17,17.9 16.1,17 15,17 C13.9,17 13,17.9 13,19 C13,20.1 13.9,21 15,21 Z M10.0710678,5.65685425 L12.1923882,7.77817459 L10.7781746,9.19238816 L8.65685425,7.07106781 L6.53553391,9.19238816 L5.12132034,7.77817459 L7.24264069,5.65685425 L5.12132034,3.53553391 L6.53553391,2.12132034 L8.65685425,4.24264069 L10.7781746,2.12132034 L12.1923882,3.53553391 L10.0710678,5.65685425 Z M12.8994949,5.24264069 L17.1421356,1 L21.3847763,5.24264069 L18.1462273,5.24264069 L18.1391558,12.1451147 C18.1386619,12.6970498 17.6910915,13.1442199 17.1391562,13.1442199 L17.1391562,13.1451151 L8.48230194,13.1451151 L8.48230194,21.6303964 L6.48826081,21.6303964 L6.48118997,12.1440031 C6.48118982,12.1437783 6.48118974,12.1435536 6.48118974,12.1433288 C6.48118974,11.591044 6.928905,11.1433288 7.48118974,11.1433288 L7.48118974,11.1440029 L16.138044,11.1440029 L16.138044,5.24264069 L12.8994949,5.24264069 Z" id="Play-Icon-Combined-Shape"></path>
  </svg>
);

export default PlayIcon;
