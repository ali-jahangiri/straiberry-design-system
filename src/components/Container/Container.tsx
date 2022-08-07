import React from "react";
import "./container.style.scss";
import { IContainerProps } from "./container.type";

const Container: React.FC<IContainerProps> = ({ children, ...elementRestProperty }) => (
	<div {...elementRestProperty} className={`container ${elementRestProperty?.className || ""}`}>
		{children}
	</div>
);

export default Container;
