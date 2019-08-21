import React from 'react';

const CollapseIcon = props => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="white" width="18px" height="18px" x="0px" y="0px" viewBox="0 0 18 18">
            {props.title && <title>{props.title}</title>}
            <g id="collapse" transform="translate(-872.000000, -57.000000)">
            <g id="Email-Client" transform="translate(100.000000, 44.000000)">
                <g id="Collapse-Icon" transform="translate(769.000000, 10.000000)">
                    <polygon id="Shape" fill="none" points="0,0 24,0 24,24 0,24       "/>
                    <path id="Combined-Shape" fillOpacity="0.8" d="M6,12h6v6l-2.3-2.3l-4.9,4.9l-1.4-1.4l4.9-4.9L6,12z M18,12h-6V6l2.3,2.3l4.9-4.9
                        l1.4,1.4l-4.9,4.9L18,12z"/>
                </g>
            </g>
        </g>
    </svg>
  );

export default CollapseIcon;
