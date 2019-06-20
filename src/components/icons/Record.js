import React from "react";

const Record = props => (
	<svg
		{...props.size || { width: "24px", height: "24px" }}
		{...props}
		viewBox="0 0 24 24"
	>
		{props.title && <title>{props.title}</title>}
		<defs>
			<path
				d="M10,5 C7.24,5 5,7.24 5,10 C5,12.76 7.24,15 10,15 C12.76,15 15,12.76 15,10 C15,7.24 12.76,5 10,5 Z M10,0 C4.48,0 0,4.48 0,10 C0,15.52 4.48,20 10,20 C15.52,20 20,15.52 20,10 C20,4.48 15.52,0 10,0 Z M10,18 C5.58,18 2,14.42 2,10 C2,5.58 5.58,2 10,2 C14.42,2 18,5.58 18,10 C18,14.42 14.42,18 10,18 Z"
				id="record-path-1"
			/>
		</defs>
		<g
			stroke="none"
			strokeWidth="1"
			fillRule="evenodd"
		>
			<mask id="record-mask-2" fill="white">
				<use xlinkHref="#record-path-1" />
			</mask>
			<use id="Record-Combined-Shape" xlinkHref="#record-path-1" />
		</g>
	</svg>
);

export default Record;
