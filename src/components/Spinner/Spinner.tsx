import React from "react";
import "./spinner.style.scss";

export interface Props {
	mode: "white" | "dark";
	rotate?: boolean;
	disabledWhileLoading?: boolean;
}

const Spinner: React.FC<Props> = ({ mode, rotate, disabledWhileLoading }) => (
	<div
		className={`spinner ${rotate ? "spinner--rotate" : ""} ${disabledWhileLoading ? "spinner--disabled" : ""} spinner--${mode}`}
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
			<path
				opacity="0.2"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.5 15.8334C13.7217 15.8334 16.3333 13.2217 16.3333 10C16.3333 6.77836 13.7217 4.16669 10.5 4.16669C7.27833 4.16669 4.66666 6.77836 4.66666 10C4.66666 13.2217 7.27833 15.8334 10.5 15.8334ZM10.5 18.3334C15.1024 18.3334 18.8333 14.6024 18.8333 10C18.8333 5.39765 15.1024 1.66669 10.5 1.66669C5.89762 1.66669 2.16666 5.39765 2.16666 10C2.16666 14.6024 5.89762 18.3334 10.5 18.3334Z"
			/>
			<path
				d="M2.16666 10C2.16666 5.39765 5.89762 1.66669 10.5 1.66669V4.16669C7.27833 4.16669 4.66666 6.77836 4.66666 10H2.16666Z"
				fill="white"
			/>
		</svg>
	</div>
);

export default Spinner;
