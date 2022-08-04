import { ReactNode } from "react";

export interface ICheckBoxItemProps {
	isDisabled?: boolean;
	defaultChecked?: boolean;
	checked?: boolean;
	desc?: string;
	label?: ReactNode;
	onChange?: (isCheck: boolean) => void;
}
