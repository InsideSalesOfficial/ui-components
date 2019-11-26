import React from 'react';

import { colors, generateFillFromProps } from '../styles/colors';

const QueueMusicIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 24 24">
    {props.title && <title>{props.title}</title>}
    <path {...generateFillFromProps(props, colors.grayD)} d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default QueueMusicIcon;
