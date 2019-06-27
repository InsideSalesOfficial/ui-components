import React from 'react';

const ExpandIcon = props => (
      <svg width="16px" height="16px" x="0px" y="0px" viewBox="0 0 16 16" fill="white">
            {props.title && <title>{props.title}</title>}
            <g id="expand">
            <g id="Email-Client">
                <g id="Expand-Icon">
                    <polygon id="Shape" fill="none" points="-4,-4 20,-4 20,20 -4,20       "/>
                    <path id="Combined-Shape" fillOpacity="0.8" d="M10.6,6.8l3.1-3.1L16,6V0h-6l2.3,2.3L9.2,5.4l0,0L7.7,6.9L6.4,8.2l0,0l-4.1,4.1L0,10v6
                        h6l-2.3-2.3l4.1-4.1l0,0l1.3-1.3L10.6,6.8z"/>
                </g>
            </g>
        </g>
        </svg>
);

export default ExpandIcon;
