import React from 'react';

const EmptyStateIcon = props => (
  <svg {...props.size || { width: '144px', height: '144px' }} {...props} viewBox="0 0 144 144">
    {props.title && <title>{props.title}</title>}
    <defs>
        <path d="M76,8 L20,8 C15.6,8 12,11.6 12,16 L12,72 C12,76.4 15.6,80 20,80 L36,80 L48,92 L60,80 L76,80 C80.4,80 84,76.4 84,72 L84,16 C84,11.6 80.4,8 76,8 Z M55.52,51.52 L48,68 L40.48,51.52 L24,44 L40.48,36.48 L48,20 L55.52,36.48 L72,44 L55.52,51.52 Z" id="path-1"></path>
    </defs>
    <g id="Task---Insights" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Insights---Extension-Not-Downloaded" transform="translate(-636.000000, -228.000000)">
            <g id="Navigation/Empty-State-Icon" transform="translate(636.000000, 228.000000)">
                <circle id="Background" fillOpacity="0.04" fill="#000000" cx="72" cy="72" r="72"></circle>
                <g id="Icon/Alert/Error" opacity="0.1" transform="translate(24.000000, 24.000000)">
                    <polygon id="Spacing" points="0 0 96 0 96 96 0 96"></polygon>
                    <g id="Icon">
                        <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                        </mask>
                        <use id="Shape" fillOpacity="0" fill="#FFFFFF" fillRule="nonzero" xlinkHref="#path-1"></use>
                        <g id="Color" mask="url(#mask-2)" fill="#000000">
                            <rect id="Rectangle" x="0" y="0" width="96" height="96"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </svg>
);

export default EmptyStateIcon;
