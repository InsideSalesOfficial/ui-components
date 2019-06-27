import React from 'react';

const ExploreIcon = props => (
    <svg {...props.size || { width: '24px', height: '24px' }} {...props} viewBox="1 1 22 22">
        {props.title && <title>{props.title}</title>}
        <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
);

export default ExploreIcon;
