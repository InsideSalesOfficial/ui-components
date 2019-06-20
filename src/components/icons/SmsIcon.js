import React from 'react';

const SmsIcon = props => (
	<svg
		{...props.size || { width: "24px", height: "24px" }}
		{...props}
		viewBox="0 0 24 24"
	>
		{props.title && <title>{props.title}</title>}
		<defs>
			<path
				d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"
				id="path-1"
			/>
		</defs>
		<g
			stroke="none"
			strokeWidth="1"
			fillRule="evenodd"
		>
			<mask id="mask-2" fill="white">
				<use xlinkHref="#path-1" />
			</mask>
			<use id="Combined-Shape" xlinkHref="#path-1" />
		</g>
	</svg>
);

export default SmsIcon;
