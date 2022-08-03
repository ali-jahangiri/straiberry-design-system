import React from "react";
import { useRef } from "react";

import { IComponentRenderEnhancer, TComponentSize } from "../../types/base.type";
import renderEnhancer from "../../utils/renderEnhancer";

import "./textInput.style.scss";

export interface ITextInputProps extends IComponentRenderEnhancer {
	value?: string | number;
	placeholder?: string;
	errorMessage?: string;
	haveError?: boolean;
	size?: TComponentSize;
	autoFocus?: boolean;
	onChange: (text: string) => void;
}

const ErrorIcon = () => (
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M7.00004 0.333496C3.31337 0.333496 0.333374 3.3135 0.333374 7.00016C0.333374 10.6868 3.31337 13.6668 7.00004 13.6668C10.6867 13.6668 13.6667 10.6868 13.6667 7.00016C13.6667 3.3135 10.6867 0.333496 7.00004 0.333496ZM9.86671 9.86683C9.60671 10.1268 9.18671 10.1268 8.92671 9.86683L7.00004 7.94016L5.07337 9.86683C4.81337 10.1268 4.39337 10.1268 4.13337 9.86683C3.87337 9.60683 3.87337 9.18683 4.13337 8.92683L6.06004 7.00016L4.13337 5.0735C3.87337 4.8135 3.87337 4.3935 4.13337 4.1335C4.39337 3.8735 4.81337 3.8735 5.07337 4.1335L7.00004 6.06016L8.92671 4.1335C9.18671 3.8735 9.60671 3.8735 9.86671 4.1335C10.1267 4.3935 10.1267 4.8135 9.86671 5.0735L7.94004 7.00016L9.86671 8.92683C10.12 9.18016 10.12 9.60683 9.86671 9.86683Z"
			fill="#FE6B6B"
		/>
	</svg>
);

const TextInput: React.FC<ITextInputProps> = ({
	value,
	errorMessage,
	placeholder,
	haveError,
	size = "medium",
	autoFocus,
	startEnhancer,
	endEnhancer,
	onChange,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const focusOnInputHandler = () => inputRef.current!.focus();

	const haveEnhancer = startEnhancer || endEnhancer;

	return (
		<div
			className={`textInput textInput--${size} ${haveEnhancer ? "textInput--enhanced" : ""} ${
				haveError ? "textInput--error" : ""
			}`}
		>
			<div className="textInput__container">
				{startEnhancer && (
					<div onClick={focusOnInputHandler} className="textInput__startEnhancer">
						{renderEnhancer(startEnhancer)}
					</div>
				)}
				<input
					ref={inputRef}
					type="text"
					autoFocus={autoFocus}
					value={value || ""}
					placeholder={placeholder}
					onChange={({ target }) => onChange(target.value)}
				/>
				{endEnhancer && (
					<div onClick={focusOnInputHandler} className="textInput__endEnhancer">
						{renderEnhancer(endEnhancer)}
					</div>
				)}
			</div>

			{errorMessage && (
				<div className="textInput__errorMessage">
					<ErrorIcon />
					<span>{errorMessage}</span>
				</div>
			)}
		</div>
	);
};

export default TextInput;
