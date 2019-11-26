import React from 'react';

import { colors, generateFillFromProps } from '../styles/colors';

const TrophyIcon = props => (
  <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="0 0 576 512">
    {props.title && <title>{props.title}</title>}
    <path  {...generateFillFromProps(props, colors.grayD)} d="M 552 64 H 448 V 24 c 0 -13.3 -10.7 -24 -24 -24 H 152 c -13.3 0 -24 10.7 -24 24 v 40 H 24 C 10.7 64 0 74.7 0 88 v 56 c 0 35.7 22.5 72.4 61.9 100.7 c 31.5 22.7 69.8 37.1 110 41.7 C 203.3 338.5 240 360 240 360 v 72 h -48 c -35.3 0 -64 20.7 -64 56 v 12 c 0 6.6 5.4 12 12 12 h 296 c 6.6 0 12 -5.4 12 -12 v -12 c 0 -35.3 -28.7 -56 -64 -56 h -48 v -72 s 36.7 -21.5 68.1 -73.6 c 40.3 -4.6 78.6 -19 110 -41.7 c 39.3 -28.3 61.9 -65 61.9 -100.7 V 88 c 0 -13.3 -10.7 -24 -24 -24 Z M 99.3 192.8 C 74.9 175.2 64 155.6 64 144 v -16 h 64.2 c 1 32.6 5.8 61.2 12.8 86.2 c -15.1 -5.2 -29.2 -12.4 -41.7 -21.4 Z M 512 144 c 0 16.1 -17.7 36.1 -35.3 48.8 c -12.5 9 -26.7 16.2 -41.8 21.4 c 7 -25 11.8 -53.6 12.8 -86.2 H 512 v 16 Z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default TrophyIcon;
