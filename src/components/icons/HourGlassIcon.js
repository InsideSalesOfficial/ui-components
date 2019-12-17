import React from 'react';

const HourGlassIcon = props => (
    <svg {...props.size || { width: '15px', height: '25px' }} {...props} viewBox="0 0 15 25">
        {props.title && <title>{props.title}</title>}
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(-74.000000, -559.000000)">
                <g transform="translate(40.000000, 199.000000)">
                    <g transform="translate(28.000000, 358.000000)">
                        <path d="M6,2 L6,8 L6.01,8 L6,8.01 L10,12 L6,16 L6.01,16.01 L6,16.01 L6,22 L18,22 L18,16.01 L17.99,16.01 L18,16 L14,12 L18,8.01 L17.99,8 L18,8 L18,2 L6,2 Z M16,16.5 L16,20 L8,20 L8,16.5 L12,12.5 L16,16.5 Z M12,11.5 L8,7.5 L8,4 L16,4 L16,7.5 L12,11.5 Z" fillRule="nonzero"></path>
                    </g>
                </g>
            </g>
        </g>   
    </svg>
);

export default HourGlassIcon;
