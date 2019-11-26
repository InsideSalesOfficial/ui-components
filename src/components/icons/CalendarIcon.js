import React from 'react';

import { generateFillFromProps } from '../styles/colors.js';

const CalendarIcon = props => (
    <svg {...props.size || { width: '18px', height: '20px' }} {...props} viewBox="0 0 18 20">
        {props.title && <title>{props.title}</title>}
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Today-24px" transform="translate(-3.000000, -1.000000)">
                <g id="ic_today_black_24px">
                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                  <path d="M19,3 L18,3 L18,1 L16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.89,3 3.01,3.9 3.01,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M19,19 L5,19 L5,8 L19,8 L19,19 Z M7,10 L12,10 L12,15 L7,15 L7,10 Z" id="Shape" {...generateFillFromProps(props)} fillRule="nonzero"></path>
                </g>
            </g>
        </g>
    </svg>
);

export default CalendarIcon;
