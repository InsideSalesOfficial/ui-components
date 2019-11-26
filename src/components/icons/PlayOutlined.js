import React from 'react';

const PlayOutlined = props => (
	<svg
		{...props.size || { width: "24px", height: "24px" }}
		{...props}
		viewBox="0 0 24 24"
	>
		{props.title && <title>{props.title}</title>}
		<defs>
			<path
				d="M10,16.5 L16,12 L10,7.5 L10,16.5 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z"
				id="play-outlined-path-1"
			/>
		</defs>
		<g
			stroke="none"
			strokeWidth="1"
			fillRule="evenodd"
		>
			<mask id="play-outlined-mask-2" fill="white">
				<use xlinkHref="#play-outlined-path-1" />
			</mask>
			<use id="Play-Outlined-Combined-Shape" xlinkHref="#play-outlined-path-1" />
		</g>
	</svg>
);

export default PlayOutlined;
