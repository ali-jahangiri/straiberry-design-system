import React from "react";
import useClassName from "../../hooks/useClassName";
import renderEnhancer from "../../utils/renderEnhancer";
import Spinner from "../Spinner";
import StyledButton from "./button.style";
import "./Button.scss";

import { IButtonProps } from "./button.type";

const Button: React.FC<IButtonProps> = ({
	type = "primary",
	isDisabled,
	isLoading,
	danger,
	block,
	size = "medium",
	children,
	startEnhancer,
	endEnhancer,
	className: buttonComponentClassName,
	...restElementProps
}) => {
	const modifiersList = { type, size, block, danger, isLoading, isDisabled };
	const className = useClassName("button", modifiersList, buttonComponentClassName);

	return (
		<StyledButton {...restElementProps} disabled={isDisabled} className={className.block}>
			<div className="button__content">
				{endEnhancer && <div className={className.element("endEnhancer")}>{renderEnhancer(endEnhancer)}</div>}
				{children}
				{startEnhancer && <div className={className.element("startEnhancer")}>{renderEnhancer(startEnhancer)}</div>}
			</div>
			<div className={className.element("loadingSpinner")}>
				<Spinner disabledWhileLoading={isDisabled} rotate={isLoading} mode={type === "primary" ? "white" : "dark"} />
			</div>
		</StyledButton>
	);
};

export default Button;
