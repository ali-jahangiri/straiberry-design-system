import { ReactNode } from "react";

export interface ITooltipProps {
	children?: ReactNode;
	triggerWidth?: "click" | "hover";
	delay?: number;
	align?: "right" | "left" | "top" | "button";
	title?: string;
}
